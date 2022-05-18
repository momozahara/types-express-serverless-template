import express, { Express, Request, Response } from 'express';
import ServerlessHttp from 'serverless-http';
import cors from 'cors';

import { router as mainRouter } from './routes/main';

const app : Express = express();

app.use(express.json());
app.use(cors());

app.use(mainRouter);

const server: ServerlessHttp.Handler = ServerlessHttp(app);

export {
  server as handler
}