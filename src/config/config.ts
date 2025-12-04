import dotenv from 'dotenv';
import { z } from 'zod';

// Load environment variables
dotenv.config();

// Define a structured schema
const configSchema = z.object({
    app: z.object({
        port: z.coerce.number().default(5000),
        env: z.enum(['development', 'production', 'test']).default('development'),
    }),
    mongodb: z.object({
        uri: z.string(),
        dbName: z.string(),
    }),
});

type ConfigType = z.infer<typeof configSchema>;

// Parse and validate environment variables
const config: ConfigType = {
    app: {
        port: Number(process.env.APP_PORT) || 5000,
        env: (process.env.NODE_ENV as 'development' | 'production' | 'test') || 'development',
    },
    mongodb: {
        uri: process.env.MONGODB_URI,
        dbName: process.env.MONGODB_DB_NAME,
    },
};

// Validate the config
const validatedConfig = configSchema.parse(config);

export default validatedConfig;

