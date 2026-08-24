# Nivaas Ravindran — Backend Engineer Portfolio

A portfolio site built to demonstrate backend engineering thinking, not just list
technologies. React + Vite frontend, Spring Boot API (added later), deployed as a
proper full-stack application.

## Status

**Milestone 1 — Project setup + Git.** Frontend scaffolded with Vite + React.
Backend, database, and deployment come in later milestones — see `docs/`.

## Structure

```
nivaas-portfolio/
├── frontend/     React + Vite app (Milestone 1+)
├── backend/      Spring Boot API (Milestone 8+)
├── docs/         Architecture notes, screenshots
├── docker/       Container configs (later milestone)
└── docker-compose.yml
```

## Running the frontend

```bash
cd frontend
npm install
npm run dev
```

Opens at http://localhost:5173

## Requirements

- Node.js 20.19+ or 22.12+ (Vite requirement)
- Java 17+ (for backend, added later)
- Maven (for backend, added later)
