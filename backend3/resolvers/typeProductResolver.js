const TipoProducto = require("../models/typeProduct")

const resolvers = {
    Query: {
        async getTipoProducto(obj){
            try{
                const tipoProducto = await TipoProducto.findById(id)
                return tipoProducto
            }catch(e){
                console.error(e)
            }
        }
    },
    Mutation:{
        async addTipoProducto(obj, {input}){
            try{
                const tipo_producto = new TipoProducto(input)
                await tipo_producto.save()
                return tipo_producto
            }catch(e){
                console.error(e)
            }
        }
    }
}

module.exports = resolvers