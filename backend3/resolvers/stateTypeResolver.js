const EstadoPedido = require("../models/state")
const resolvers = {
    Query: {
        async getEstadoPedido(obj){
            try{
                const estadopedidos = await EstadoPedido.findById(id)
                return estadopedidos
            }catch(e){
                console.error(e)
            }
        }
    },
    Mutation:{
        async addEstadoPedido(obj, {input}){
            try{
                const estadoPedido = new EstadoPedido(input)
                await estadoPedido.save()
                return estadoPedido
            }catch(e){
                console.error(e)
            }
        }
}

}

module.exports = resolvers