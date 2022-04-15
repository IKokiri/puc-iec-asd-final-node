import express from 'express';
import cors from 'cors';
import indexRouter from './infrastructure/routes/index.js';
import { addEnvironmentVariables } from './infrastructure/environment/env.js';
import getPage from './infrastructure/crawler/puppeteer/puppeteer.js';

addEnvironmentVariables()

const app = express();
app.use(express.json());
app.use(cors());
const page = await getPage()
app.use('/', indexRouter);

export default app;
