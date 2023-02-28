import * as functions from "firebase-functions";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import

// Basic configuration
const app = express();
dotenv.config();

// Controllers are callback functions that corresponds to routers 
// to handle requests
const taskController = require('./controllers/task');
const translateController = require('./controllers/translate');
const userController = require('./controllers/user');

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// Parse application/json
app.use(bodyParser.json())

// Use cors in development to enable API call from frontend origin
app.use(cors({
  credentials: true,
  // origin: ['http://localhost:4200', 'https://to-do-list-angular-node-b8f78.web.app/']
  origin: true,
}))

// API ROUTES
app.get('/', (req, res) => {
  res.send("Index!");
})

app.get('/api/tasks', taskController.getTasks);
app.post('/api/tasks', taskController.addTask);

app.get('/api/tasks/:username/', taskController.getTasksByUser)

app.get('/api/users', userController.getUsers);

app.post('/api/translate', translateController.translateTask)

// SERVER CONFIG
// const PORT = 5000;
// app.listen(PORT, () => {
//   console.log('Website listening on http://localhost:' + PORT);
// })
exports.app = functions.https.onRequest(app)
