"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const rindes_routes_1 = __importDefault(require("../routes/rindes.routes"));
const connection_1 = __importDefault(require("../db/connection"));
const cors_1 = __importDefault(require("cors"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '4000';
        this.middlewares();
        this.routes();
        this.conectarDB();
        ;
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('Aplicacion corriendo por el puerto', this.port);
        });
    }
    routes() {
        this.app.use('/api/rindes', rindes_routes_1.default);
    }
    conectarDB() {
        connection_1.default.connect((err) => {
            if (err)
                throw err;
            console.log('Conectado a la base de dato');
        });
    }
    middlewares() {
        //funciones que se ejecutan antes de que la peticion llegue al servidor
        //párseo del body
        this.app.use(express_1.default.json());
        //cords
        this.app.use((0, cors_1.default)());
    }
}
exports.default = Server;
