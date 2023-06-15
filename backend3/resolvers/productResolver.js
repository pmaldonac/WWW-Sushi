const Producto = require("../models/product")

const resolvers = {
    Query: {
        async getProductos(obj){
            try{                
                const producto = await Producto.find()
                return producto
            }catch(e){
                console.error(e)
            }
        }
    },
    Mutation:{
        async addProducto(obj, {productoInput}){
            try{
                const producto = new Producto(productoInput)
                await producto.save()
                return producto
            }catch(e){
                console.error(e)
            }
        }
    }
}

module.exports = resolvers