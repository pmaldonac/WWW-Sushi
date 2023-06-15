const Cliente = require("../models/customer")
const Usuario = require("../models/user")

const resolvers = {
    Query: {

        async getClientes(obj){
            try{
                const clientes = await Cliente.find()
                return clientes
            }catch(e){
                console.error(e)
            }
            
        },

        async getCliente(obj, {id}){
            try{
                const cliente = await Cliente.findById(id)
                return cliente
            }catch(e){
                console.error(e)
            }
            
        }
    },
    Mutation: {
        async addCliente(obj, {clienteInput, userInput}){
            try{
                const user = new Usuario(userInput)
                const savedUser = await user.save()
                console.log(savedUser["_id"])

                const lastId = await Cliente.findOne().sort({_id: -1})
                if (lastId != null) {
                    id = lastId["_id"]+1
                }
                clienteInput["_id"] = id
                clienteInput.usuario = savedUser._id;

                const cliente = new Cliente(clienteInput)
                await cliente.save()
                return cliente;
            }catch (e){
                console.error(e)
            }
            
        },

        
        async updateCliente(obj, {id, input}){
            try{
                const cliente = await Cliente.findByIdAndUpdate(id, input)
                return cliente
            }catch(e){
                console.error(e)
            }            
        }

    }
}

module.exports = resolvers