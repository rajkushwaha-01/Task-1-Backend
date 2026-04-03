# Backend API

Simple Node.js + Express backend for job and user authentication.

## Project Structure

- `src/app.js` - Express app setup
- `src/routes/auth.route.js` - Auth routes
- `src/routes/job.route.js` - Job routes
- `src/controllers` - Controller logic
- `src/models` - Mongoose models
- `src/middleware/auth.middleware.js` - JWT auth middleware
- `src/config/db.js` - Database connection
- `server.js` - Server entry point

## Requirements

- Node.js 18+ or compatible
- npm
- MongoDB running locally or cloud URI

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Create `.env` file with at least:
   ```ini
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/mydb
   JWT_SECRET=your-secret
   ```
3. Start server:
   ```bash
   npm start
   ```

## API

- `POST /api/auth/register` - Register user
- `POST /api/auth/login` - Login user
- `GET /api/jobs` - Get jobs (protected)
- `POST /api/jobs` - Create job (protected)

## Notes

- Adjust routes and middleware as needed.
- Add tests and validation for production readiness.