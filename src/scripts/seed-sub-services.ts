import { MongoDBService } from '../service/mongodb.service';
import { SubServiceData } from '../data/sub-service.seed';
import { ServiceContentData } from '../data/service-content.seed';
import { SubServiceDocument, ServiceContentDocument } from '../types/sub-service.types';
import logger from '../utils/logger';

async function seedSubServices() {
    const mongoDBService = new MongoDBService();
    const subServicesCollection = 'service_categories';
    const serviceContentCollection = 'services';

    try {
        // Wait for MongoDB connection to be established
        await mongoDBService.connect();
        logger.info('MongoDB connection established, starting to seed sub services and service content...');

        // Seed SubServices
        for (const subService of SubServiceData) {
            // Check if sub service already exists
            const existing = await mongoDBService.findOne<SubServiceDocument>(
                subServicesCollection,
                { slug: subService.slug } as any
            );

            if (existing) {
                logger.info(`Sub service with slug "${subService.slug}" already exists, skipping...`);
                continue;
            }

            const subServiceDoc: SubServiceDocument = {
                ...subService,
                createdAt: new Date(),
                updatedAt: new Date(),
            };

            await mongoDBService.insertOne<SubServiceDocument>(subServicesCollection, subServiceDoc);
            logger.info(`Inserted sub service: ${subService.slug}`);
        }

        // Seed ServiceContent
        for (const serviceContent of ServiceContentData) {
            // Check if service content already exists
            const existing = await mongoDBService.findOne<ServiceContentDocument>(
                serviceContentCollection,
                { slug: serviceContent.slug } as any
            );

            if (existing) {
                logger.info(`Service content with slug "${serviceContent.slug}" already exists, skipping...`);
                continue;
            }

            const serviceContentDoc: ServiceContentDocument = {
                ...serviceContent.content,
                slug: serviceContent.slug,
                createdAt: new Date(),
                updatedAt: new Date(),
            };

            await mongoDBService.insertOne<ServiceContentDocument>(serviceContentCollection, serviceContentDoc);
            logger.info(`Inserted service content: ${serviceContent.slug}`);
        }

        logger.info('Sub services and service content seeding completed successfully!');
    } catch (error: any) {
        logger.error('Error seeding sub services', error);
        throw error;
    } finally {
        await mongoDBService.close();
        process.exit(0);
    }
}

// Run the seed function
seedSubServices().catch((error) => {
    logger.error('Failed to seed sub services', error);
    process.exit(1);
});

