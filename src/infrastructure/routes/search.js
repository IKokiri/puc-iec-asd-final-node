import { Router } from 'express';
import searchData from '../../useCases/searchData.js';
import "reflect-metadata"
import getMagnet from '../../useCases/getMagnet.js';
import getVerified from '../../useCases/getVerified.js';

const serachRouter = Router();

serachRouter.get('/:term', async (req, res) => {
  const { term } = req.params
  try {
    const foundMovies = await searchData(term)
    return (!!foundMovies)? res.status(200).send(foundMovies) : res.status(204)
  } catch (error) {
    return res.status(500).send({status: false, msg: "Server Error, tente novamente"});
  }

});

serachRouter.post('/magnet', async (req, res) => {

  const { title, link, site_id } = req.body
  const dataToGetMagnet = {
    title,
    link,
    site_id
  }

  try {
    const foundMagnets = await getMagnet(dataToGetMagnet)
    return res.status(200).send(foundMagnets);
  } catch (error) {
    return res.status(500).send({status: false, msg: "Server Error, tente novamente"});
  }


});


export default serachRouter;
