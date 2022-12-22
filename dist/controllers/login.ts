import { Request,Response} from 'express'
import Usuarios from '../../models/usuario';
import bcrypt from 'bcrypt';




export const register= async(req:Request,res:Response)=>{
const {username,password}= req.body;
const hash= await bcrypt.genSalt(10);
var user={
   username:username,
   password: await bcrypt.hash(password,hash)
};
const createUser= await Usuarios.create(user);
res.json({createUser});
}
export const login = async (req:Request,res:Response)=>{
    const {username,password} = req.body;
         const existeUser:any = await Usuarios.findOne({where:{username}});  
         if(existeUser){
            const passwordCompare = await bcrypt.compare(password,existeUser.password);
            if(passwordCompare){
               return res.status(200).json({
                  msg:"ingreso"
               });
            }
            if(!passwordCompare){
               res.status(400).json({
                  msg: "datos incorrectos"
               })
            }
         }
}


