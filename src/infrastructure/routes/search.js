import { Router } from 'express';
import searchData from '../../useCases/searchData.js';
import "reflect-metadata"
import getMagnet from '../../useCases/getMagnet.js';

const serachRouter = Router();

serachRouter.get('/:term', async (req, res) => {
  const { term } = req.params

  const foundMovies = await searchData(term)
  res.status(200).send(foundMovies);
});

serachRouter.post('/magnet', async (req, res) => {
  const { title, link, site_id } = req.body

  const dataToGetMagnet = {
    title,
    link,
    site_id
  }

  const foundMagnets = await getMagnet(dataToGetMagnet)
  res.status(200).send({foundMagnets});
});


export default serachRouter;
