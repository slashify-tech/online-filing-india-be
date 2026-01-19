import { Router } from 'express';
import { ServiceContentController } from '../controllers/service-content.controller';

const router = Router();
const serviceContentController = new ServiceContentController();

// GET /api/service-contents - Get all service contents
router.get('/', (req, res) => serviceContentController.getAllServiceContents(req, res));

// GET /api/service-contents/:slug - Get service content by slug
router.get('/:slug', (req, res) => serviceContentController.getServiceContentBySlug(req, res));

// GET /api/service-contents/service-card/:serviceCardSlug - Get service content by service card slug
// router.get('/service-card/:serviceCardSlug', (req, res) =>
//     serviceContentController.getServiceContentByServiceCardSlug(req, res)
// );

// POST /api/service-contents - Create a new service content
// router.post('/', (req, res) => serviceContentController.createServiceContent(req, res));

export default router;

