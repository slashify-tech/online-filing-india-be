import { Router } from 'express';
import { SubServiceGroupController } from '../controllers/sub-service-group.controller';

const router = Router();
const subServiceGroupController = new SubServiceGroupController();

router.get('/', (req, res) => subServiceGroupController.getAllSubServiceGroups(req, res));
router.get('/by-slug/:groupSlug', (req, res) => subServiceGroupController.getSubServiceGroupBySlug(req, res));
router.get('/by-parent/:parentServiceSlug', (req, res) =>
    subServiceGroupController.getSubServiceGroupsByParentService(req, res)
);
router.get('/for-service/:serviceSlug', (req, res) => subServiceGroupController.getSubServiceGroupForService(req, res));
router.post('/', (req, res) => subServiceGroupController.createSubServiceGroup(req, res));

export default router;
