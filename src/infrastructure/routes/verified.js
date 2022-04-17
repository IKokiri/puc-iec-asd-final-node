import { Router } from 'express';
import searchData from '../../useCases/searchData.js';
import "reflect-metadata"
import getMagnet from '../../useCases/getMagnet.js';
import getVerified from '../../useCases/getVerified.js';

const verifiedRouter = Router();


verifiedRouter.get('/', async (req, res) => {
  const foundVerifieds = await getVerified()
  res.status(200).send(foundVerifieds);
});


export default verifiedRouter;