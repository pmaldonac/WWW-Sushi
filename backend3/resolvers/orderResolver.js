const Orden = require("../models/order")

const resolvers = {
    Query: {
        async getOrdenes(obj){
            try{
                const ordenes = await Orden.findById()
                return ordenes
            }catch(e){
                console.error(e)
            }
        }

    },
    Mutation:{
        async addOrden(obj, {input}){
            try{
                const orden = new Orden(input)
                await orden.save()
                return orden

            }catch(e){
                console.error(e)
            }
        }
    }
        

}

module.exports = resolvers