import { ServiceContent } from './sub-service.types';

export interface SubServiceGroup {
    groupName: string;
    groupSlug: string;
    description: string;
    serviceSlugs: string[];
    parentServiceSlug: string; // The slug of the parent service (e.g., 'business-licences-registration')
}

export interface SubServiceGroupDocument extends SubServiceGroup {
    services?: Array<{ slug: string; content: ServiceContent }>; // Actual service content data
    _id?: string;
    createdAt?: Date;
    updatedAt?: Date;
}
