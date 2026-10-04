# Node.js Demo App

A lightweight, production-ready Express.js web service demonstration equipped with automated testing, containerization with Docker, and CI/CD pipelines via GitHub Actions.

---

## 📁 Project Structure

```text
nodejs-demo-app/
│
├── .github/
│   └── workflows/
│       └── main.yml
│
├── test/
│   └── app.test.js
│
├── app.js
├── package.json
├── package-lock.json
├── Dockerfile
├── .dockerignore
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v20+ recommended)
- [npm](https://www.npmjs.com/) (v10+ recommended)
- [Docker](https://www.docker.com/) (optional, for containerized run)

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/Punith887/nodejs-demo-app.git
cd nodejs-demo-app
npm install
```

---

## 💻 Running the App

### Start the Server

```bash
npm start
```

The server will start listening on port `3000` (or `PORT` environment variable).

Visit:
- [http://localhost:3000/](http://localhost:3000/)
- [http://localhost:3000/health](http://localhost:3000/health)

### Running Tests

Execute the automated test suite using Node's built-in test runner and Supertest:

```bash
npm test
```

---

## 🌐 API Endpoints

### 1. `GET /`
Returns a welcome message and service status.

**Response (200 OK):**
```json
{
  "message": "Hello, World!",
  "status": "success",
  "timestamp": "2026-10-04T04:40:00.000Z"
}
```

### 2. `GET /health`
Returns health and uptime information for monitoring.

**Response (200 OK):**
```json
{
  "status": "healthy",
  "uptime": 12.34
}
```

---

## 🐳 Docker

### Build Docker Image

```bash
docker build -t nodejs-demo-app .
```

### Run Container

```bash
docker run -d -p 3000:3000 --name demo-app nodejs-demo-app
```

Access the app at `http://localhost:3000`.

To stop the container:
```bash
docker stop demo-app
docker rm demo-app
```

---

## ⚙️ CI/CD Pipeline

Continuous Integration is set up with GitHub Actions in [`.github/workflows/main.yml`](.github/workflows/main.yml):
- Runs on pushes and pull requests to the `main` branch.
- Validates the test suite across multiple Node.js LTS versions (v20, v22).
- Validates the Docker build process to prevent deployment breakages.

---

## 📄 License

ISC
