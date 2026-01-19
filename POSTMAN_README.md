# Postman Collection for Wisetalk Hello API

This directory contains Postman collections and environment files for testing the Wisetalk Hello API.

## Files

- `postman_collection.json` - Main Postman collection with all API endpoints
- `postman_environment.json` - Environment variables for different environments

## Import Instructions

### Option 1: Import via Postman App

1. Open Postman
2. Click **Import** button (top left)
3. Select `postman_collection.json` file
4. Click **Import**
5. Select `postman_environment.json` file
6. Click **Import**

### Option 2: Import via Postman Web

1. Go to [Postman Web](https://web.postman.co/)
2. Click **Import** button
3. Upload `postman_collection.json` file
4. Upload `postman_environment.json` file

## Setup Environment

1. After importing, select the environment: **Wisetalk Hello API - Environment**
2. Update `baseUrl` if your server is running on a different port or host
3. Default: `http://localhost:5000`

## API Endpoints Included

### Sub Services
- ✅ Get All Sub Services
- ✅ Get Sub Service by Slug
- ✅ Get Service Card with Content
- ✅ Create Sub Service

### Service Contents
- ✅ Get All Service Contents
- ✅ Get Service Content by Slug
- ✅ Get Service Content by Service Card Slug
- ✅ Create Service Content

### Examples
- ✅ All 9 Business Types (Public Limited, Private Limited, OPC, Section 8, Producer Company, LLP, Partnership, Proprietorship, HUF)
- ✅ Health Check

## Available Service Card Slugs

1. `public-limited-company`
2. `private-limited-company`
3. `one-person-company-opc`
4. `section-8-company`
5. `producer-company`
6. `limited-liability-partnership-llp`
7. `partnership-firm`
8. `proprietorship-firm`
9. `huf-hindu-undivided-family`

## Available Sub Service Slugs

1. `start-business`
2. `manage-business`

## Testing Flow

1. **Start the server**: `npm run dev` or `npm start`
2. **Seed the database** (if not done): `npm run seed:sub-services`
3. **Test Health Check**: Verify API is running
4. **Get All Sub Services**: See all categories
5. **Get Service Card with Content**: Get detailed content for any business type
6. **Get Service Content**: Get content directly by slug

## Example Request

```bash
# Get Public Limited Company with full content
GET http://localhost:5000/api/service-categories/service-card/public-limited-company
```

## Response Structure

### Service Card with Content Response
```json
{
  "message": "Service card with content retrieved successfully",
  "data": {
    "serviceCard": {
      "icon": "publicList.svg",
      "title": "Public Limited Company",
      "slug": "public-limited-company",
      "content": "...",
      "serviceContentId": "..."
    },
    "parentSubService": {
      "slug": "start-business",
      "title": "Select the Type of Business You Want to Start"
    },
    "serviceContent": {
      "heroSection": {...},
      "packages": [...],
      "faqs": [...],
      ...
    }
  }
}
```

## Notes

- All endpoints include proper error handling
- Responses include appropriate HTTP status codes
- Collection includes examples for all 9 business types
- Environment variables can be customized for different environments (dev, staging, production)





