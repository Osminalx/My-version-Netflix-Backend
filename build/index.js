"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const movies_1 = __importDefault(require("./Routes/movies"));
//initializations
const app = (0, express_1.default)();
const PORT = 3000;
const DB_URI = (_a = process.env.DB_URI) !== null && _a !== void 0 ? _a : 'DB_URI default';
//Middleware
app.use(express_1.default.json());
app.get('/ping', (_req, res) => {
    console.log('someone pinged here!!');
    res.send('pong');
});
app.get('/', (_req, res) => {
    res.json({ message: 'Welcome' });
});
app.use('/products', movies_1.default);
mongoose_1.default.connect(DB_URI);
console.log('Database connected');
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
