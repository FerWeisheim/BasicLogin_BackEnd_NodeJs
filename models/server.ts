import express,{Application} from 'express'
import userRouter from '../dist/routes/usuario'
import loginn from '../dist/routes/login'
import db from '../dist/db/connection'

const cors =require('cors');
class server{
    private app: Application;
    private port:string;
    private path=
    {
    usuarios:'/api/usuarios',
    login:'/api/login'
    }

    constructor(){
    this.app=express();
    this.app.use(cors());
    this.port = process.env.PORT || '8000';
    this.dbConnection();
    this.middelwares();
    
    this.routes();//definir mis rutas
    }

    //conectar base de datos
     async dbConnection(){
        try {
            await db.authenticate();
            console.log("base conectada");
        } catch (error:any) {
            throw new Error(error)
        }

    }
    


    middelwares(){
        //configuar cors
        this.app.use(cors());
        //lectura del body
        this.app.use(express.json());
        //carpeta publica
        this.app.use(express.static('public'));
    
    }

    routes(){
        this.app.use(this.path.login,loginn);
        this.app.use(this.path.usuarios,userRouter);
    }



    listen(){
        this.app.listen(this.port,()=>
        console.log("server en puerto " + this.port));
    }

}
export default server;