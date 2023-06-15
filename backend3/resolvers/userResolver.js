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
        }
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
        }
    }
}

module.exports = resolvers