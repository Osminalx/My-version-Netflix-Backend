import Movie from '../Models/movie';

interface Movie  {
    name:string,
    genero:string,
    fecha_publicacion:Date,
    img: string,
    link:string,
    sipnosis: string,
    liked:boolean
}
export const getMovies = async ()=>{
    const movies = await Movie.find().lean().exec();
    return movies
}

export const getMovie = async (id:string)=>{
    const movie = await Movie.findById(id).lean().exec()
    return movie
}


export const saveMovies = async (movie:Movie) =>{
    const savedMovies = new Movie(movie);
    await savedMovies.save();
    return savedMovies;
}

export const deleteMovie = async (id:string)=>{
    const deletedMovie = await Movie.findByIdAndDelete(id);
    return deletedMovie
}