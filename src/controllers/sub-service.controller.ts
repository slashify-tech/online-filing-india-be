import { Request, Response } from 'express';
import { MongoDBService } from '../service/mongodb.service';
import logger from '../utils/logger';
import { SubServiceDocument, ServiceContentDocument } from '../types/sub-service.types';

export class SubServiceController {
    private mongoDBService: MongoDBService;
    private collectionName = 'service_categories';

    constructor() {
        this.mongoDBService = new MongoDBService();
    }

    async getAllSubServices(req: Request, res: Response): Promise<void> {
        try {
            const subServices = await this.mongoDBService.findMany<SubServiceDocument>(
                this.collectionName,
                {}
            );

            res.json({
                message: 'Sub services retrieved successfully',
                count: subServices.length,
                data: subServices,
            });
        } catch (error: any) {
            logger.error('Error in getAllSubServices', error);
            res.status(500).json({
                error: 'Internal Server Error',
                message: error.message,
            });
        }
    }

    async getSubServiceBySlug(req: Request, res: Response): Promise<void> {
        try {
            const { slug } = req.params;

            if (!slug) {
                res.status(400).json({
                    error: 'Bad Request',
                    message: 'Slug parameter is required',
                });
                return;
            }

            const subService = await this.mongoDBService.findOne<SubServiceDocument>(
                this.collectionName,
                { slug } as any
            );

            if (!subService) {
                res.status(404).json({
                    error: 'Not Found',
                    message: `Sub service with slug "${slug}" not found`,
                });
                return;
            }

            res.json({
                message: 'Sub service retrieved successfully',
                data: subService,
            });
        } catch (error: any) {
            logger.error('Error in getSubServiceBySlug', error);
            res.status(500).json({
                error: 'Internal Server Error',
                message: error.message,
            });
        }
    }

    async createSubService(req: Request, res: Response): Promise<void> {
        try {
            const { slug, title, ServiceCard } = req.body;

            if (!slug || !title || !ServiceCard) {
                res.status(400).json({
                    error: 'Bad Request',
                    message: 'slug, title, and ServiceCard are required',
                });
                return;
            }

            // Check if sub service with this slug already exists
            const existing = await this.mongoDBService.findOne<SubServiceDocument>(
                this.collectionName,
                { slug } as any
            );

            if (existing) {
                res.status(409).json({
                    error: 'Conflict',
                    message: `Sub service with slug "${slug}" already exists`,
                });
                return;
            }

            const subService: SubServiceDocument = {
                slug,
                title,
                ServiceCard,
                createdAt: new Date(),
                updatedAt: new Date(),
            };

            const insertedId = await this.mongoDBService.insertOne<SubServiceDocument>(
                this.collectionName,
                subService
            );

            res.status(201).json({
                message: 'Sub service created successfully',
                id: insertedId,
                data: subService,
            });
        } catch (error: any) {
            logger.error('Error in createSubService', error);
            res.status(500).json({
                error: 'Internal Server Error',
                message: error.message,
            });
        }
    }

    async getServiceCardWithContent(req: Request, res: Response): Promise<void> {
        try {
            const { serviceCardSlug } = req.params;

            if (!serviceCardSlug) {
                res.status(400).json({
                    error: 'Bad Request',
                    message: 'Service card slug parameter is required',
                });
                return;
            }

            // Find the service card in all sub services
            const subServices = await this.mongoDBService.findMany<SubServiceDocument>(
                this.collectionName,
                {}
            );

            let serviceCard = null;
            let parentSubService = null;

            for (const subService of subServices) {
                const card = subService.ServiceCard.find((card) => card.slug === serviceCardSlug);
                if (card) {
                    serviceCard = card;
                    parentSubService = subService;
                    break;
                }
            }

            if (!serviceCard || !parentSubService) {
                res.status(404).json({
                    error: 'Not Found',
                    message: `Service card with slug "${serviceCardSlug}" not found`,
                });
                return;
            }

            // Get the service content if it exists
            let serviceContent = null;
            if (serviceCard.serviceContentId) {
                serviceContent = await this.mongoDBService.findOne<ServiceContentDocument>(
                    'services',
                    { _id: serviceCard.serviceContentId } as any
                );
            } else {
                // Try to find by slug as fallback
                serviceContent = await this.mongoDBService.findOne<ServiceContentDocument>(
                    'services',
                    { slug: serviceCardSlug } as any
                );
            }

            res.json({
                message: 'Service card with content retrieved successfully',
                data: {
                    serviceCard,
                    parentSubService: {
                        slug: parentSubService.slug,
                        title: parentSubService.title,
                    },
                    serviceContent: serviceContent || null,
                },
            });
        } catch (error: any) {
            logger.error('Error in getServiceCardWithContent', error);
            res.status(500).json({
                error: 'Internal Server Error',
                message: error.message,
            });
        }
    }
}

