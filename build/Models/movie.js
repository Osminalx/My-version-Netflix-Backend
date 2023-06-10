"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const MovieSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true
    },
    genero: {
        type: String,
        required: true
    },
    fecha_publicacion: {
        type: Date,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    sipnosis: {
        type: String,
        required: true
    },
    liked: {
        type: Boolean,
        required: true,
        default: false
    }
});
const movieModel = mongoose_1.default.model('Movie', MovieSchema);
exports.default = movieModel;
