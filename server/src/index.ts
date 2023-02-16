import express from "express";
import cors from "cors";

const app = express();

app.use(cors({
  credentials: true,
  origin: ['http://localhost:4200']
}))

app.get('/', (req, res) => {
  res.send("hello world!");
})

const PORT = 5000;
app.listen(PORT, () => {
  console.log('Website listening on http://localhost:' + PORT);
})

