# Todo App

A full-stack Todo application built with modern web technologies. This project is structured as a monorepo containing both the frontend client and the backend API services.

## 🚀 Tech Stack

### Frontend
- **Framework**: [Next.js](https://nextjs.org/) (React 19)
- **Language**: TypeScript
- **Testing**: Jest & React Testing Library

### Backend
- **Framework**: [NestJS](https://nestjs.com/)
- **Database ORM**: [Prisma](https://www.prisma.io/)
- **Database**: PostgreSQL (hosted on [Supabase](https://supabase.com/))
- **Language**: TypeScript

---

## 📁 Project Structure

```
todo-app-/
├── backend/    # NestJS API application, Prisma schema, and DB migrations
├── frontend/   # Next.js web application
└── docs/       # Project documentation
```

---

## 🛠️ Setup Instructions

### 1. Backend Setup

Navigate to the `backend` directory:
```bash
cd backend
```

Install dependencies:
```bash
npm install
```

Set up Environment Variables:
1. Copy the `.env.example` file to create a `.env` file:
   ```bash
   cp .env.example .env
   ```
2. Open `.env` and replace `[YOUR-PASSWORD]` with your actual Supabase database password.

Initialize the Database schema (push Prisma schema to Supabase):
```bash
npx prisma db push
```

Start the backend development server:
```bash
npm run start:dev
```
*The API will be available at `http://localhost:3000` (default).*

### 2. Frontend Setup

Navigate to the `frontend` directory:
```bash
cd frontend
```

Install dependencies:
```bash
npm install
```

Start the frontend development server:
```bash
npm run dev
```
*The web app will be available at `http://localhost:3000` (or the port specified in your Next.js console).*

---

## 📝 Scripts & Commands

### Backend (`/backend`)
- `npm run start:dev` - Starts NestJS with watch mode.
- `npm run build` - Builds the application for production.
- `npx prisma studio` - Opens Prisma's visual database editor.

### Frontend (`/frontend`)
- `npm run dev` - Starts Next.js development server.
- `npm run build` - Builds Next.js for production.
- `npm run test` - Runs Jest unit tests.

---

## 🛡️ License
This project is open-source and available under the MIT License.
