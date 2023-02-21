import { Request, Response } from 'express';

const Pool = require('pg').Pool
const pool = new Pool({
  host: process.env.INSTANCE_HOST, // e.g. '127.0.0.1'
  port: process.env.DB_PORT, // e.g. '5432'
  user: process.env.DB_USER, // e.g. 'my-user'
  password: process.env.DB_PASS, // e.g. 'my-user-password'
  database: process.env.DB_NAME, // e.g. 'my-database'
})

const getTasks = (req: Request, res: Response) => {
  // Query to retrieve all tasks in the tasks table
  pool.query('SELECT * FROM Tasks', (error: Error, results: any) => {
    if (error) {
      throw error
    }
    console.log('Results:', results.rows)
    res.status(200).json(results.rows)
  })
}

const addTask = (req: Request, res: Response) => {
  console.log('Req', req.body);
  // Insert query to add new task with given text and reminder
  pool.query(`INSERT INTO tasks ("text", "reminder") VALUES ($1, $2)`, [req.body.text, req.body.reminder],
    (error: Error, results: any) => {
      if (error) {
        throw error
      }
      console.log('Added:', results)
      res.status(200).json(req.body)
    })
}

module.exports = {
  getTasks,
  addTask,
}