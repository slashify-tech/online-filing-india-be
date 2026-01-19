import { Router } from 'express';
import { SubServiceController } from '../controllers/sub-service.controller';

const router = Router();
const subServiceController = new SubServiceController();

// GET /api/sub-services - Get all sub services
router.get('/', (req, res) => subServiceController.getAllSubServices(req, res));

// // GET /api/sub-services/service-card/:serviceCardSlug - Get service card with its content
// router.get('/service-card/:serviceCardSlug', (req, res) =>
//     subServiceController.getServiceCardWithContent(req, res)
// );

// GET /api/sub-services/:slug - Get sub service by slug
router.get('/:slug', (req, res) => subServiceController.getSubServiceBySlug(req, res));

// POST /api/sub-services - Create a new sub service
// router.post('/', (req, res) => subServiceController.createSubService(req, res));

export default router;

