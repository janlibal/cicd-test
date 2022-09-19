"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//import app from "./app"
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
//const PORT: Number = 8080
const port = 8080;
app.get('/', (req, res, next) => {
    res.status(200).json({
        status: 'success',
        message: 'Hello world',
    });
});
//app.listen(PORT, (): void => console.log(`running on port ${PORT}`))
app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
});
