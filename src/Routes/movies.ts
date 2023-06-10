import express from 'express';
import * as moviesController from '../Controllers/movies-controller';

const router = express.Router();

router.get('/',moviesController.getMovies);

router.post('/', moviesController.saveMovie);

router.get('/:movieId',moviesController.getMovie )

router.delete('/:movieId',moviesController.deleteMovie )

export default router;