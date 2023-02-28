import { Request, Response } from 'express';

const postgres = require('postgres');
require('dotenv').config();

const URL = `${process.env.DB_STRING}?options=project%3D${process.env.ENDPOINT_ID}`;
const sql = postgres(URL, { ssl: 'require' });

const getTasks = async (req: Request, res: Response) => {
  // Query to retrieve all tasks in the tasks table
  // pool.query('SELECT * FROM Tasks', (error: Error, results: any) => {
  //   if (error) {
  //     throw error
  //   }
  //   console.log('Results:', results.rows)
  //   res.status(200).json(results.rows)
  // })
  const tasks = await sql`SELECT * FROM tasks`;
  console.log('Result:', tasks);
  return res.status(200).json(tasks)
}

const addTask = async (req: Request, res: Response) => {
  // // Insert query to add new task with given text and reminder
  // pool.query(`INSERT INTO tasks ("text", "reminder", "username") VALUES ($1, $2, $3`, [req.body.text, req.body.reminder, req.body.username],
  //   (error: Error, results: any) => {
  //     if (error) {
  //       throw error
  //     }
  //     console.log('Added:', results)
  //     res.status(200).json(req.body)
  //   })
  const task = await sql`INSERT INTO tasks ("text", "reminder", "username") VALUES (${req.body.text}, ${req.body.reminder}, ${req.body.username})`;
  console.log('Result:', task);
  return res.status(200).json(req.body)

}

const getTasksByUser = async (req: Request, res: Response) => {
  // Query to retrieve tasks of the given user in the URL
  // const username = req.params.username;
  // pool.query(`SELECT * FROM Tasks WHERE username = $1`, [username], (error: Error, results: any) => {
  //   if (error) {
  //     throw error
  //   }
  //   console.log('Results:', results.rows)
  //   res.status(200).json(results.rows)
  // })
  const tasks = await sql`SELECT * FROM tasks WHERE username = ${req.params.username}`;
  console.log('Result:', tasks);
  return res.status(200).json(tasks)
}

module.exports = {
  getTasks,
  addTask,
  getTasksByUser,
}