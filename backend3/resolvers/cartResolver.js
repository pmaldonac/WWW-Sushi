const Carro = require("../models/cart")
const Producto = require("../models/product")
const Usuario= require("../models/user")


const resolvers = {
    Carro: {
        producto: async (carro) => {
    
          const productosIds = carro.producto; 
          const productos = [];
    
          for (const item of productosIds) {
            const product = await Producto.findById(item);
            if (product) {
              productos.push(product)
            }
          }
    
          return productos;
        },
    },
    
    Query: {
        async getCarro(obj, {id}){
            try{
                const carro = await Carro.findById(id)
                return carro
            }catch(e){
                console.error(e)
            }
        },
        async getCarroUsuario(obj, {id_usuario}){
            try{
                const carro = await Carro.find({"usuario": id_usuario})
                return carro[0]
            }catch(e){
                console.error(e)
            }
        }
    },
    Mutation:{
        async addCarro(obj,{input}){
            try{
                const id_producto = input.producto
                let total = 0;

                for (const item of id_producto) {
                  const product = await Producto.findById(item);
                  if (product) {
                    total += product.precio;
                  }
                }

                input.total = total;
                const carro = new Carro(input)
                await carro.save()
                return carro
            }catch(e){
                console.error(e)
            }
        },
        async updateCarro(obj, {id, input}){
            try{
                const carro_antiguo = await Carro.findById(id)
                carro_antiguo["producto"].push(input.producto)
                
                const id_producto = carro_antiguo.producto
                let total = 0;

                for (const item of id_producto) {
                  const product = await Producto.findById(item);
                  if (product) {
                    total += product.precio;
                  }
                }

                carro_antiguo.total = total;
                const carro_actualizado = await Carro.findByIdAndUpdate(id, carro_antiguo)
                return carro_actualizado
            }catch(e){
                console.error(e)
            }
        },

        async deleteProductoCarro(obj, {id, input}){
            try{
                const carro_antiguo = await Carro.findById(id)
                const carro_nuevo = carro_antiguo["producto"].filter((element) => element == input.producto)
                carro_antiguo["producto"] = carro_nuevo
                const id_producto = carro_antiguo.producto
                let total = 0;

                for (const item of id_producto) {
                  const product = await Producto.findById(item);
                  if (product) {
                    total += product.precio;
                  }
                }

                carro_antiguo.total = total;

                const carro_actualizado = await Carro.findByIdAndUpdate(id, carro_antiguo)
                return carro_actualizado
            }catch(e){
                console.error(e)
            }
    }
}
}

module.exports = resolvers