import { MongoDBService } from '../service/mongodb.service';
import { businessLicencesSubGroups } from '../data/business-licences-sub-groups.seed';
import { SubServiceGroupDocument } from '../types/sub-service-group.types';
import { trademarkServicesContent } from '../data/trademark-services.seed';
import { fssaiServicesContent } from '../data/fssai-services.seed';
import { exportImportServicesContent } from '../data/export-import-services.seed';
import { ngoServicesContent } from '../data/ngo-services.seed';
import logger from '../utils/logger';

// Map group slugs to their corresponding service content arrays
const groupServiceContentMap: Record<string, Array<{ slug: string; content: any }>> = {
    'trademark-services': trademarkServicesContent,
    'fssai-services': fssaiServicesContent,
    'export-import-services': exportImportServicesContent,
    'ngo-registration': ngoServicesContent,
};

async function seedSubServiceGroups() {
    const mongoDBService = new MongoDBService();
    const collectionName = 'service_groups';
    const parentServiceSlug = 'business-licences-registration';

    try {
        // Wait for MongoDB connection to be established
        await mongoDBService.connect();
        logger.info('MongoDB connection established, starting to seed sub service groups...');

        // Seed SubServiceGroups
        for (const group of businessLicencesSubGroups) {
            // Check if sub service group already exists
            const existing = await mongoDBService.findOne<SubServiceGroupDocument>(
                collectionName,
                { groupSlug: group.groupSlug } as any
            );

            if (existing) {
                logger.info(`Sub service group with slug "${group.groupSlug}" already exists, skipping...`);
                continue;
            }

            // Get the service content for this group
            const serviceContentArray = groupServiceContentMap[group.groupSlug] || [];
            
            // Filter services to only include those that match the serviceSlugs in the group
            const matchingServices = serviceContentArray.filter((service) =>
                group.serviceSlugs.includes(service.slug)
            );

            const subServiceGroupDoc: SubServiceGroupDocument = {
                groupName: group.groupName,
                groupSlug: group.groupSlug,
                description: group.description,
                serviceSlugs: group.serviceSlugs,
                parentServiceSlug: group.parentServiceSlug || parentServiceSlug,
                services: matchingServices,
                createdAt: new Date(),
                updatedAt: new Date(),
            };

            await mongoDBService.insertOne<SubServiceGroupDocument>(collectionName, subServiceGroupDoc);
            logger.info(`Inserted sub service group: ${group.groupSlug} with ${matchingServices.length} services`);
        }

        logger.info('Sub service groups seeding completed successfully!');
    } catch (error: any) {
        logger.error('Error seeding sub service groups', error);
        throw error;
    } finally {
        await mongoDBService.close();
        process.exit(0);
    }
}

// Run the seed function
seedSubServiceGroups().catch((error) => {
    logger.error('Failed to seed sub service groups', error);
    process.exit(1);
});
