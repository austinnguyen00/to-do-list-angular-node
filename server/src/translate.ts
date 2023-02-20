import { Request, Response } from 'express';

const projectId = process.env.PROJECT_ID;

// Imports the Google Cloud client library
const { Translate } = require('@google-cloud/translate').v2;

// Instantiates a client
const translateClient = new Translate({ projectId });

export default async function translate(req: Request, res: Response): Promise<void> {
  try {
    const text: string = req.body.text;

    // The target language
    const target: string = 'ru';

    // Translates some text into Russian
    const [translation] = await translateClient.translate(text, target);
    console.log(`Text: ${text}`);
    console.log(`Translation: ${translation}`);
    res.json(translation);

  }
  catch (err) {
    // console.log('Req', req);
    console.log('Error:', err);
    res.status(400).json({ error: err });
  }
}
