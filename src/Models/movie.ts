import mongoose from 'mongoose';


const MovieSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    genero:{
        type: String,
        required:true
    },
    fecha_publicacion:{
        type:Date,
        required:true
    },
    img:{
        type: String,
        required:true
    },
    link:{
        type: String,
        required:true
    },
    sipnosis:{
        type: String,
        required:true
    },
    liked:{
        type:Boolean,
        required:true,
        default:false
    }
});

const movieModel = mongoose.model('Movie',MovieSchema);
export default movieModel;