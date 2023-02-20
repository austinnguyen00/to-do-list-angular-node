import { Request, Response } from 'express';

const Pool = require('pg').Pool
const pool = new Pool({
  host: process.env.INSTANCE_HOST, // e.g. '127.0.0.1'
  port: process.env.DB_PORT, // e.g. '5432'
  user: process.env.DB_USER, // e.g. 'my-user'
  password: process.env.DB_PASS, // e.g. 'my-user-password'
  database: process.env.DB_NAME, // e.g. 'my-database'

})

const getTasks = (request: Request, response: Response) => {
  pool.query('SELECT * FROM Tasks', (error: Error, results: any) => {
    if (error) {
      throw error
    }
    console.log('Results:', results.rows)
    response.status(200).json(results.rows)
  })
}

module.exports = {
  getTasks
}