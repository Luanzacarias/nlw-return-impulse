"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = require("./routes");
const app = (0, express_1.default)();
// É uma forma de não permitir frontend inadequado acessar o backend.
// so o endereço que você passar, no caso atul tds podem acessar.
/*
    app.use(cors({
        origin: 'http://...'
    }));
*/
app.use((0, cors_1.default)());
// reconhecer o json
app.use(express_1.default.json());
// usar rotas do arquivo de rotas
app.use(routes_1.routes);
// vai ouvir a porta 3333
app.listen(3333, () => {
    console.log('HTTP server running!');
});
