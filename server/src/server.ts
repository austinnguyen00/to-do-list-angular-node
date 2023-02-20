import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import translate from "./translate";

// Basic configuration
const app = express();
dotenv.config();

// Controllers are callback functions that corresponds to routers 
// to handle requests
const taskController = require('./controllers/task');

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// Parse application/json
app.use(bodyParser.json())

// Use cors in development to enable API call from frontend origin
app.use(cors({
  credentials: true,
  origin: ['http://localhost:4200']
}))

// API ROUTES
app.get('/', (req, res) => {
  res.send("Index!");
})

app.get('/api/tasks', taskController.getTasks);

app.post('/api/translate', (req, res) => {
  translate(req, res);
})

// SERVER CONFIG
const PORT = 5000;
app.listen(PORT, () => {
  console.log('Website listening on http://localhost:' + PORT);
})

