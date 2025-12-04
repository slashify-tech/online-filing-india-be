import { MongoClient, Db, Collection, Document, OptionalUnlessRequiredId, Filter } from 'mongodb';
import config from '../config/config';
import logger from '../utils/logger';

export class MongoDBService {
    private uri: string;
    private dbName: string;
    private client: MongoClient;
    private db?: Db;

    constructor() {
        this.uri = config.mongodb.uri;
        this.dbName = config.mongodb.dbName;
        this.client = new MongoClient(this.uri);
        this.connect()
            .then(() => {
                logger.info('Connected to MongoDB');
            })
            .catch((error) => {
                logger.error('Failed to connect to MongoDB', error);
                process.exit(1);
            });
    }

    async connect() {
        if (!this.db) {
            await this.client.connect();
            this.db = this.client.db(this.dbName);
            logger.info(`Connected to MongoDB at ${this.uri}`);
        }
    }

    private getCollection<T extends Document = Document>(collectionName: string): Collection<T> {
        if (!this.db) {
            throw new Error('MongoDB is not connected. Call connect() first.');
        }
        return this.db.collection<T>(collectionName);
    }

    async insertOne<T extends Document>(collectionName: string, data: OptionalUnlessRequiredId<T>) {
        const collection = this.getCollection<T>(collectionName);
        const result = await collection.insertOne(data);
        return result.insertedId;
    }

    async findOne<T extends Document>(collectionName: string, filter: Filter<T>) {
        const collection = this.getCollection<T>(collectionName);
        return collection.findOne(filter);
    }

    async findMany<T extends Document>(collectionName: string, filter: Filter<T> = {}) {
        const collection = this.getCollection<T>(collectionName);
        return collection.find(filter).toArray();
    }

    async updateOne<T extends Document>(
        collectionName: string,
        filter: Filter<T>,
        update: Partial<T>
    ) {
        const collection = this.getCollection<T>(collectionName);
        return collection.updateOne(filter, { $set: update });
    }

    async deleteOne<T extends Document>(collectionName: string, filter: Filter<T>) {
        const collection = this.getCollection<T>(collectionName);
        return collection.deleteOne(filter);
    }

    async close() {
        await this.client.close();
        this.db = undefined;
        logger.info('MongoDB connection closed.');
    }
}

