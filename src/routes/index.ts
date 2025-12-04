import { Router } from 'express';
import subServiceRoutes from './sub-service.routes';
import serviceContentRoutes from './service-content.routes';

const router = Router();

// Mount routes
router.use('/sub-services', subServiceRoutes);
router.use('/service-contents', serviceContentRoutes);

// Health check endpoint
router.get('/health', (req, res) => {
    res.json({
        status: 'ok',
        timestamp: new Date().toISOString(),
        service: 'online-filing-india-api',
    });
});

export default router;

