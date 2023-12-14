import express from 'express';
import cors from 'cors';
import router from './src/router/index.js';
import "./options.js"
import dotenv from 'dotenv';
dotenv.config();


const corsOptions = {
  origin: process.env.ROOT_CLIENT && "*", //YOU ROOT APP REACT/REACT NATIVE
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
};

const app = express()

app.use(express.json());
app.use(cors(corsOptions));

/* if (isProduction) {
  app.use(express.static(CLIENT_PATH))
} */

app.use('/api', router)

/* if (isProduction) {
  app.get('*', (_req, res) => {
    res.sendFile(CLIENT_PATH + '/index.html')
  })
} */

const PORT = 8080;

const server = app.listen(PORT, () => {
  console.log(`server running on PORT: ${PORT}`)
});
server.on("error", err => console.log(err));