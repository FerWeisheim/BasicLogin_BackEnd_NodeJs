import {Request,Response} from 'express';
import Usuarios from '../../models/usuario';
// import usuarios from '../../models/usuario';



export const getUsuarios = async (req:Request,res:Response)=>{
    const usuario = await Usuarios.findAll();
    res.json(usuario);
}
export const getUsuario = async (req:Request,res:Response)=>{
    const {id}= req.params
    const usuario = await Usuarios.findByPk(id);
    if(usuario){
        res.json(usuario)
    }else{
        res.status(400).json({
            msg:"El usuario no existe en la base de datos"
        })
    }
}
export const postUsuario = async (req:Request,res:Response)=>{
    const {username,password}=req.body;

    const  existeUsername= await Usuarios.findOne({
        where:{
            username:username
        }
    });
    if(existeUsername){
        return res.status(400).json({
            msg:" el username ya existe " + username
        });
    }
    try {
        const usuario =  await Usuarios.create({
        username,password
        });

       res.json({
        usuario
       })
     } catch (error) {
        console.log(error)
     res.status(500).json({
       msg:"Error en Server"
      })
    }

}
export const putUsuario = async (req:Request,res:Response)=>{
    const {id} = req.params
    const {username,password} = req.body;
     
    try {
        
        const usuario =  await Usuarios.findByPk(id);
        if(!usuario){
            return res.status(400).json({
                msg:"el usuario no existe"
            })
        }
        await usuario.update({username,password},{
            where:{
                id
            }
        });
        res.status(200).json({
            usuario
        })
    } 
    catch (error) {
        res.status(500)
    }   
}
export const deleteUsuarios = async(req:Request,res:Response)=>{
    const {id} = req.params
    const usuario = await Usuarios.findByPk(id);
    if(!usuario){
        return res.status(400).json({
           mgs:"el usuario con el Id: "+ id + " no existe"
       });
    }
    await usuario.destroy();
    res.status(200).json({
        mgs:"usuario eliminado"
    });   
}