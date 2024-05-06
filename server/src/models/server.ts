import express from 'express';
import routes from '../routes/rindes.routes'
import connection from '../db/connection';
import cors from 'cors';

class Server {
private app: express.Application;
private port: string;

constructor(){
    this.app = express();
    this.port = process.env.PORT || '4000';
    this.middlewares();
    this.routes();
    this.conectarDB();;
}

listen(){
    this.app.listen(this.port, ()=>{
        console.log('Aplicacion corriendo por el puerto', this.port);
        
    });
}

routes(){
    this.app.use('/api/rindes', routes)
}

conectarDB(){
connection.connect((err) => {
    if (err)  throw err;
    console.log('Conectado a la base de dato');
        
})
}

middlewares(){
    //funciones que se ejecutan antes de que la peticion llegue al servidor
    //párseo del body
    this.app.use(express.json());
    //cords
this.app.use(cors());

}

}

export default Server;