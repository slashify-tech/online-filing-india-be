import { Request, Response } from 'express';
import { ObjectId } from 'mongodb';
import { MongoDBService } from '../service/mongodb.service';
import logger from '../utils/logger';
import { SubServiceGroupDocument } from '../types/sub-service-group.types';

export class SubServiceGroupController {
    private mongoDBService: MongoDBService;
    private collectionName = 'service_groups';

    constructor() {
        this.mongoDBService = new MongoDBService();
    }

    async getAllSubServiceGroups(req: Request, res: Response): Promise<void> {
        try {
            const subServiceGroups = await this.mongoDBService.findMany<SubServiceGroupDocument>(
                this.collectionName,
                {}
            );

            res.json({
                message: 'Sub service groups retrieved successfully',
                count: subServiceGroups.length,
                data: subServiceGroups,
            });
        } catch (error: any) {
            logger.error('Error in getAllSubServiceGroups', error);
            res.status(500).json({
                error: 'Internal Server Error',
                message: error.message,
            });
        }
    }

    async getSubServiceGroupBySlug(req: Request, res: Response): Promise<void> {
        try {
            const { groupSlug } = req.params;

            if (!groupSlug) {
                res.status(400).json({
                    error: 'Bad Request',
                    message: 'Group slug parameter is required',
                });
                return;
            }

            const subServiceGroup = await this.mongoDBService.findOne<SubServiceGroupDocument>(
                this.collectionName,
                { groupSlug } as any
            );

            if (!subServiceGroup) {
                res.status(404).json({
                    error: 'Not Found',
                    message: `Sub service group with slug "${groupSlug}" not found`,
                });
                return;
            }

            res.json({
                message: 'Sub service group retrieved successfully',
                data: subServiceGroup,
            });
        } catch (error: any) {
            logger.error('Error in getSubServiceGroupBySlug', error);
            res.status(500).json({
                error: 'Internal Server Error',
                message: error.message,
            });
        }
    }

    async getSubServiceGroupsByParentService(req: Request, res: Response): Promise<void> {
        try {
            const { parentServiceSlug } = req.params;

            if (!parentServiceSlug) {
                res.status(400).json({
                    error: 'Bad Request',
                    message: 'Parent service slug parameter is required',
                });
                return;
            }

            const subServiceGroups = await this.mongoDBService.findMany<SubServiceGroupDocument>(
                this.collectionName,
                { parentServiceSlug } as any
            );

            res.json({
                message: 'Sub service groups retrieved successfully',
                count: subServiceGroups.length,
                data: subServiceGroups,
            });
        } catch (error: any) {
            logger.error('Error in getSubServiceGroupsByParentService', error);
            res.status(500).json({
                error: 'Internal Server Error',
                message: error.message,
            });
        }
    }

    async getSubServiceGroupForService(req: Request, res: Response): Promise<void> {
        try {
            const { serviceSlug } = req.params;

            if (!serviceSlug) {
                res.status(400).json({
                    error: 'Bad Request',
                    message: 'Service slug parameter is required',
                });
                return;
            }

            const subServiceGroup = await this.mongoDBService.findOne<SubServiceGroupDocument>(
                this.collectionName,
                { serviceSlugs: serviceSlug } as any
            );

            if (!subServiceGroup) {
                res.status(404).json({
                    error: 'Not Found',
                    message: `Sub service group for service slug "${serviceSlug}" not found`,
                });
                return;
            }

            res.json({
                message: 'Sub service group retrieved successfully',
                data: subServiceGroup,
            });
        } catch (error: any) {
            logger.error('Error in getSubServiceGroupForService', error);
            res.status(500).json({
                error: 'Internal Server Error',
                message: error.message,
            });
        }
    }

    async getSubServiceGroupById(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;

            if (!id) {
                res.status(400).json({
                    error: 'Bad Request',
                    message: 'ID parameter is required',
                });
                return;
            }

            // Validate ObjectId format
            if (!ObjectId.isValid(id)) {
                res.status(400).json({
                    error: 'Bad Request',
                    message: 'Invalid ID format',
                });
                return;
            }

            const subServiceGroup = await this.mongoDBService.findOne<SubServiceGroupDocument>(
                this.collectionName,
                { _id: new ObjectId(id) } as any
            );

            if (!subServiceGroup) {
                res.status(404).json({
                    error: 'Not Found',
                    message: `Sub service group with ID "${id}" not found`,
                });
                return;
            }

            res.json({
                message: 'Sub service group retrieved successfully',
                data: subServiceGroup,
            });
        } catch (error: any) {
            logger.error('Error in getSubServiceGroupById', error);
            res.status(500).json({
                error: 'Internal Server Error',
                message: error.message,
            });
        }
    }

    async createSubServiceGroup(req: Request, res: Response): Promise<void> {
        try {
            const { groupName, groupSlug, description, serviceSlugs, parentServiceSlug, services } = req.body;

            if (!groupName || !groupSlug || !description || !serviceSlugs || !parentServiceSlug) {
                res.status(400).json({
                    error: 'Bad Request',
                    message: 'groupName, groupSlug, description, serviceSlugs, and parentServiceSlug are required',
                });
                return;
            }

            // Check if sub service group with this slug already exists
            const existing = await this.mongoDBService.findOne<SubServiceGroupDocument>(
                this.collectionName,
                { groupSlug } as any
            );

            if (existing) {
                res.status(409).json({
                    error: 'Conflict',
                    message: `Sub service group with slug "${groupSlug}" already exists`,
                });
                return;
            }

            const subServiceGroup: SubServiceGroupDocument = {
                groupName,
                groupSlug,
                description,
                serviceSlugs,
                parentServiceSlug,
                services: services || undefined,
                createdAt: new Date(),
                updatedAt: new Date(),
            };

            const insertedId = await this.mongoDBService.insertOne<SubServiceGroupDocument>(
                this.collectionName,
                subServiceGroup
            );

            res.status(201).json({
                message: 'Sub service group created successfully',
                id: insertedId,
                data: subServiceGroup,
            });
        } catch (error: any) {
            logger.error('Error in createSubServiceGroup', error);
            res.status(500).json({
                error: 'Internal Server Error',
                message: error.message,
            });
        }
    }
}
