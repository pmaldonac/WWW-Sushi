const Cliente = require("./models/customer")
const Usuario = require("./models/user")

const resolvers = {
    Query: {
        async getClientes(obj){
            const clientes = await Cliente.find()
            return clientes
        },
        async getCliente(obj, {id}){
            const cliente = await Cliente.findById(id)
        },
        async getUsuarios(obj){
            const usuarios = await Usuario.find()
        },
        async getUsuario(obj, {id}){
            const usuario = await Usuario.findById(id)
        }
    },
    Mutation: {
        async addCliente(obj, {input}){
            //Agregar condición de objeto vacío. try catch
            const lastId = await Cliente.findOne().sort({_id: -1})
            if (lastId != null) {
                id = lastId["_id"]+1
            }
            input["_id"] = id

            const cliente = new Cliente(input)
            await cliente.save()
            return cliente;
        },

        async addUsuario(obj, {input}){
            //Agregar condición de objeto vacío. try catch
            var lastId = await Usuario.findOne().sort({_id: -1})
            var id = 0
            if (lastId != null) {
                id = lastId["_id"]+1
                
            }
            input["_id"] = id
            const usuario = new Usuario(input)
            await usuario.save()
            return usuario
        },

        async updateCliente(obj, {id, input}){
            const cliente = await Cliente.findByIdAndUpdate(id, input)
            return cliente
        }
    }
}

module.exports = resolvers