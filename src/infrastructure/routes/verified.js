import { Router } from 'express';
import searchData from '../../useCases/searchData.js';
import "reflect-metadata"
import getMagnet from '../../useCases/getMagnet.js';
import getVerified from '../../useCases/getVerified.js';

const verifiedRouter = Router();


verifiedRouter.get('/', async (req, res) => {
  try {
    const foundVerifieds = await getVerified()
    return (foundVerifieds.length)? res.status(200).send(foundVerifieds) : res.status(204)
  } catch (error) {
    return res.status(500).send({status: false, msg: "Server Error, tente novamente"});
  }
});


export default verifiedRouter;