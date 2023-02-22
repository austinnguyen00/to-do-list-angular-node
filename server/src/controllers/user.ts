import axios, { AxiosResponse } from 'axios';
import { Request, Response } from 'express';

const getUsers = async (req: Request, res: Response) => {
  try {
    const token = process.env.AUTH0_TOKEN;
    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        per_page: 50, // Set the number of results per page
      },
    };

    // Retrieve list of users from auth0 management API
    // Use the list of users to display in the admin dashboard
    const response: AxiosResponse = await axios.get(
      'https://dev-ghfmxbn22dct1vdh.us.auth0.com/api/v2/users',
      options,
    );
    const users = response.data;
    console.log(users);
    res.status(200).json(users);
  } catch (error) {
    console.error('Error retrieving users:', error);
  }
}

module.exports = {
  getUsers,
}
