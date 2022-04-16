import { Router } from 'express';
import searchData from '../../useCases/searchData.js';

const serachRouter = Router();

serachRouter.get('/:term', async (req, res) => {
  const { term } = req.params

  const foundMovies = await searchData(term)
  res.status(200).send(foundMovies);
});

serachRouter.get('/magnet/:link/:source', async (req, res) => {
  const { link, source } = req.params
  console.log(link, source)
  const foundMovies = await searchData(term)
  res.status(200).send(foundMovies);
});


export default serachRouter;
