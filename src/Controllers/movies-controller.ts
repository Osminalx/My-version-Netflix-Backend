import {Request, Response} from 'express'
import * as MovieService from '../Services/movie-service';

interface Movie  {
    name:string,
    genero:string,
    fecha_publicacion:Date,
    img: string,
    link:string,
    sipnosis: string,
    liked:boolean
}


export const getMovies = async (_req:Request,res:Response)=>{
    const movies = await MovieService.getMovies();
    res.json(movies)
}

export const getMovie = async (req:Request,res:Response)=>{
    const id = req.params.movieId;
    try {
        const movie = await MovieService.getMovie(id);
        res.status(200).json(movie);
    } catch (err) {
        console.log(err)
        res.status(500).json({error: err})
    }
}

export const saveMovie = async (req:Request,res:Response) =>{
    try{
    const movie:Movie = req.body;
    console.log('movie', movie)
    const savedMovie = await MovieService.saveMovies(movie);
    res.status(201).json(savedMovie);
    } catch(error){
        console.log('Error al gaurdar la pelicula:' ,error);
        res.status(500).json({error:'Ocurrió un error al guardar la película'})
    }
}

export const updateMovieLike = async (req:Request,res:Response)=>{
    try {
        const movieId = req.params.movieId
        const {liked} =req.body

        const updatedLike = await  MovieService.updateLiked(movieId,liked);

        res.status(200).json(updatedLike)

    } catch (error) {
        console.error(error)

        res.status(500).json({error:'Ocurrió un error al intentar acutalizar el estado liked de la película'})

    }
}

export const deleteMovie = async (req:Request,res:Response)=>{
    const id = req.params.movieId
    try {
        const deletedMovie = await MovieService.deleteMovie(id)
        if (deletedMovie) {
            res.status(200).json({message:'Película eliminada correctamente'})
        } else {
            res.status(404).json({message:'No se encontró la película'})
        }
    } catch (error) {
        console.log('Error al eliminar la película',error)
        res.status(500).json({error:'Ocurriió un error al elimiinar la película'})
    }
}