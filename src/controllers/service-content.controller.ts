import { Request, Response } from 'express';
import { MongoDBService } from '../service/mongodb.service';
import logger from '../utils/logger';
import { ServiceContentDocument } from '../types/sub-service.types';

export class ServiceContentController {
    private mongoDBService: MongoDBService;
    private collectionName = 'serviceContents';

    constructor() {
        this.mongoDBService = new MongoDBService();
    }

    async getAllServiceContents(req: Request, res: Response): Promise<void> {
        try {
            const serviceContents = await this.mongoDBService.findMany<ServiceContentDocument>(
                this.collectionName,
                {}
            );

            res.json({
                message: 'Service contents retrieved successfully',
                count: serviceContents.length,
                data: serviceContents,
            });
        } catch (error: any) {
            logger.error('Error in getAllServiceContents', error);
            res.status(500).json({
                error: 'Internal Server Error',
                message: error.message,
            });
        }
    }

    async getServiceContentBySlug(req: Request, res: Response): Promise<void> {
        try {
            const { slug } = req.params;

            if (!slug) {
                res.status(400).json({
                    error: 'Bad Request',
                    message: 'Slug parameter is required',
                });
                return;
            }

            const serviceContent = await this.mongoDBService.findOne<ServiceContentDocument>(
                this.collectionName,
                { slug } as any
            );

            if (!serviceContent) {
                res.status(404).json({
                    error: 'Not Found',
                    message: `Service content with slug "${slug}" not found`,
                });
                return;
            }

            res.json({
                message: 'Service content retrieved successfully',
                data: serviceContent,
            });
        } catch (error: any) {
            logger.error('Error in getServiceContentBySlug', error);
            res.status(500).json({
                error: 'Internal Server Error',
                message: error.message,
            });
        }
    }

    async getServiceContentByServiceCardSlug(req: Request, res: Response): Promise<void> {
        try {
            const { serviceCardSlug } = req.params;

            if (!serviceCardSlug) {
                res.status(400).json({
                    error: 'Bad Request',
                    message: 'Service card slug parameter is required',
                });
                return;
            }

            // Find service content by matching the slug (which should match the service card slug)
            const serviceContent = await this.mongoDBService.findOne<ServiceContentDocument>(
                this.collectionName,
                { slug: serviceCardSlug } as any
            );

            if (!serviceContent) {
                res.status(404).json({
                    error: 'Not Found',
                    message: `Service content for service card slug "${serviceCardSlug}" not found`,
                });
                return;
            }

            res.json({
                message: 'Service content retrieved successfully',
                data: serviceContent,
            });
        } catch (error: any) {
            logger.error('Error in getServiceContentByServiceCardSlug', error);
            res.status(500).json({
                error: 'Internal Server Error',
                message: error.message,
            });
        }
    }

    async createServiceContent(req: Request, res: Response): Promise<void> {
        try {
            const { slug, ...content } = req.body;

            if (!slug) {
                res.status(400).json({
                    error: 'Bad Request',
                    message: 'slug is required',
                });
                return;
            }

            // Check if service content with this slug already exists
            const existing = await this.mongoDBService.findOne<ServiceContentDocument>(
                this.collectionName,
                { slug } as any
            );

            if (existing) {
                res.status(409).json({
                    error: 'Conflict',
                    message: `Service content with slug "${slug}" already exists`,
                });
                return;
            }

            const serviceContent: ServiceContentDocument = {
                slug,
                ...content,
                createdAt: new Date(),
                updatedAt: new Date(),
            };

            const insertedId = await this.mongoDBService.insertOne<ServiceContentDocument>(
                this.collectionName,
                serviceContent
            );

            res.status(201).json({
                message: 'Service content created successfully',
                id: insertedId,
                data: serviceContent,
            });
        } catch (error: any) {
            logger.error('Error in createServiceContent', error);
            res.status(500).json({
                error: 'Internal Server Error',
                message: error.message,
            });
        }
    }
}

