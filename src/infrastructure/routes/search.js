import { Router } from 'express';

const serach = Router();

  serach.get('/', (req, res) => {

    res.status(200).send({ });
  });



export default serach;
