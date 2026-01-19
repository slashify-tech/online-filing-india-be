import { Router } from 'express';
import serviceCategoriesRoutes from './service-categories.routes';
import serviceContentRoutes from './service-content.routes';
import authRoutes from './auth.routes';
import subServiceGroupRoutes from './sub-service-group.routes';

const router = Router();

// Mount routes
router.use('/service-categories', serviceCategoriesRoutes);
router.use('/service-contents', serviceContentRoutes);
router.use('/auth', authRoutes);
router.use('/sub-service-groups', subServiceGroupRoutes);

// Health check endpoint
router.get('/health', (req, res) => {
    res.json({
        status: 'ok',
        timestamp: new Date().toISOString(),
        service: 'online-filing-india-api',
    });
});

export default router;

