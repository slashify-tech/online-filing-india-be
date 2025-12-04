# Wisetalk Hello API

A simple REST API service with MongoDB integration for the Wisetalk project.

## Features

- REST API endpoints (no GraphQL)
- MongoDB database integration
- Express.js server
- TypeScript support
- Winston logging
- Environment-based configuration

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file in the root directory:
```env
APP_PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017
MONGODB_DB_NAME=wisetalk_hello
```

3. Make sure MongoDB is running on your system.

4. Start the development server:
```bash
npm run dev
```

## API Endpoints

### Health Check
- **GET** `/api/health` - Check API health status

### Hello Endpoints
- **GET** `/api/hello` - Get a hello message
- **POST** `/api/hello` - Create a new greeting
  - Body: `{ "message": "Hello World", "name": "John" }`
- **GET** `/api/hello/all` - Get all greetings

### Root
- **GET** `/` - API information and available endpoints

## Project Structure

```
wisetalk-hello-api/
├── src/
│   ├── config/
│   │   └── config.ts          # Configuration management
│   ├── controllers/
│   │   └── hello.controller.ts # Hello controller
│   ├── routes/
│   │   ├── hello.routes.ts    # Hello routes
│   │   └── index.ts            # Route index
│   ├── service/
│   │   └── mongodb.service.ts  # MongoDB service
│   ├── utils/
│   │   └── logger.ts           # Winston logger
│   └── server.ts               # Express server
├── logs/                       # Log files
├── package.json
├── tsconfig.json
└── nodemon.json
```

## Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build TypeScript to JavaScript
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Environment Variables

- `APP_PORT` - Server port (default: 5000)
- `NODE_ENV` - Environment (development/production/test)
- `MONGODB_URI` - MongoDB connection string
- `MONGODB_DB_NAME` - MongoDB database name

