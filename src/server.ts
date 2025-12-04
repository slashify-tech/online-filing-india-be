import express, { Request, Response, NextFunction } from 'express';
import config from './config/config';
import cors from 'cors';
import morgan from 'morgan';
import logger from './utils/logger';
import routes from './routes';

const app = express();
const PORT = config.app.port || 5000;

// Middleware
app.use(cors({ credentials: true, origin: true }));

app.use(
    morgan('tiny', {
        stream: {
            write: (message: string) => logger.info(message.trim()),
        },
    })
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use('/api', routes);

// Root endpoint
app.get('/', (req: Request, res: Response) => {
    res.json({
        message: 'Welcome to Wisetalk Hello API',
        version: '1.0.0',
        endpoints: {
            health: '/api/health',
            hello: '/api/hello',
            getAllGreetings: '/api/hello/all',
        },
    });
});

// Global Error Handler
app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
    logger.error('Unhandled Error:', err);
    res.status(500).json({
        error: 'Internal Server Error',
        message: err.message,
    });
});

// Handle Unhandled Promise Rejections
process.on('unhandledRejection', (reason: any) => {
    logger.error('Unhandled Promise Rejection:', reason);
});

// Handle Uncaught Exceptions
process.on('uncaughtException', (err: Error) => {
    logger.error('Uncaught Exception:', err);
    process.exit(1);
});

// Start the server
const server = app.listen(PORT, () => {
    logger.info(`🚀 Online Filing India API listening on PORT - ${PORT}`);
    logger.info(`Environment: ${config.app.env}`);
});

// Handle graceful shutdown
const shutdown = async () => {
    logger.info('Shutting down gracefully...');
    server.close(() => {
        logger.info('Server closed');
        process.exit(0);
    });
};

process.on('SIGTERM', shutdown);
process.on('SIGINT', shutdown);

