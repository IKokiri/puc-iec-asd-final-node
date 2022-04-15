import { Router } from 'express';

const indexRouter = Router();

try {
  indexRouter.get('/', (req, res) => {
    const info = { status: 'ok' }

    res.status(200).send({ info });
  });
} catch (error) {
  console.log(error)
}


export default indexRouter;
