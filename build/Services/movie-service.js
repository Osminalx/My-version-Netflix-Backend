"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveMovies = exports.getMovies = void 0;
const movie_1 = __importDefault(require("../Models/movie"));
const getMovies = () => __awaiter(void 0, void 0, void 0, function* () {
    const movies = yield movie_1.default.find().lean().exec();
    return movies;
});
exports.getMovies = getMovies;
const saveMovies = (movie) => __awaiter(void 0, void 0, void 0, function* () {
    const savedMovies = new movie_1.default(movie);
    yield savedMovies.save();
    return savedMovies;
});
exports.saveMovies = saveMovies;
