import { Request, Response } from 'express';
import ISO6391 from 'iso-639-1';

// Imports the Google Cloud client library
const { Translate } = require('@google-cloud/translate').v2;

const projectId = process.env.PROJECT_ID;

// Instantiates a client
const translateClient = new Translate({ projectId });

const translateTask = async (req: Request, res: Response) => {
  try {
    const text: string = req.body.text;

    // The target language
    const target: string = ISO6391.getCode(req.body.language);

    // Translates some text into target language
    const [translation] = await translateClient.translate(text, target);
    console.log(`Text: ${text}`);
    console.log(`Translation: ${translation}`);
    res.status(200).json(translation);
  }

  catch (err) {
    console.log('Req', req.body);
    console.log('Error:', err);
    res.status(400).json({ error: err });
  }
}

module.exports = {
  translateTask,
}