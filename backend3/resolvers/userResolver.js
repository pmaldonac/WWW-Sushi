const Usuario = require("../models/user")

const resolvers = {
    
    Query: {
        async getUsuarios(obj){
            try{
                const usuarios = await Usuario.find()
                return usuarios
            }catch(e){
                console.error(e)
            }
        },

        async getUsuario(obj, {id}){
            try{                
                const usuario = await Usuario.findById(id)
                return usuario
            }catch(e){
                console.error(e)
            }
        },
       
    },
    Mutation:{
        async addUsuario(obj, {input}){
            try{
                const usuario = new Usuario(input)
                await usuario.save()
                return usuario
            }catch(e){
                console.error(e)
            }           
        },
        async loginUsuario(obj, {user,passw}){
            response = {}
            try{
                const usuario = await Usuario.find({"username": user})
                if(usuario.length === 0){
                    console.log("Entre")
                    response["error"] = "Usuario no existe"
                    response["data"] = null
                    response["status"] = 400
                }else{
                    if(usuario[0].password== passw){
                        response["data"] = usuario[0]
                        response["status"] = 200
                         
                    }else{
                        response["data"] = null
                        response["error"] = "Contraseña no coinciden"
                        response["status"] = 401

                    }
                }
                return response
            }catch(e){
                console.error(e)
            }
    }
    }
}

module.exports = resolvers