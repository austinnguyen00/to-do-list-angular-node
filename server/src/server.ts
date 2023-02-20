import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { TASKS } from "./mock-tasks";
import translate from "./translate";

const app = express();

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// Parse application/json
app.use(bodyParser.json())

// Use cors in development to enable API call from frontend origin
app.use(cors({
  credentials: true,
  origin: ['http://localhost:4200']
}))

// API ENDPOINTS
app.get('/', (req, res) => {
  res.send("Index!");
})

app.get('/api/tasks', (req, res) => {
  res.send(TASKS);
})

app.post('/api/translate', (req, res) => {
  translate(req, res);
})

// SERVER CONFIG
const PORT = 5000;
app.listen(PORT, () => {
  console.log('Website listening on http://localhost:' + PORT);
})

