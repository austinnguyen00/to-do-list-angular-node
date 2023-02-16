import express from "express";
import cors from "cors";
import { TASKS } from "./mock-tasks";

const app = express();

// Use cors in development to enable API call from frontend origin
app.use(cors({
  credentials: true,
  origin: ['http://localhost:4200']
}))

// API ENDPOINTS
app.get('/', (req, res) => {
  res.send("hello world!");
})

app.get('/api/tasks', (req, res) => {
  res.send(TASKS);
})

// SERVER CONFIG
const PORT = 5000;
app.listen(PORT, () => {
  console.log('Website listening on http://localhost:' + PORT);
})

