const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLNonNull,
    GraphQLDate
  } = require('graphql')

const customerType = new GraphQLObjectType({
  name: 'Cliente',
  description: 'This represents a customer information',
  fields: () =>({
    id_cliente: {type: GraphQLNonNull(GraphQLInt)},
    nombre: {type: GraphQLNonNull(GraphQLString)},
    direccion: {type: GraphQLNonNull(GraphQLString)},
    comuna:{type: GraphQLNonNull(GraphQLString)},
    provincia: {type: GraphQLNonNull(GraphQLString)},
    region: {type: GraphQLNonNull(GraphQLString)},
    fecha_nacimiento: {type: GraphQLNonNull(GraphQLDate)},
    sexo: {type: GraphQLNonNull(GraphQLString)},
    correo: {type: GraphQLNonNull(GraphQLString)},
    telefono: {type: GraphQLNonNull(GraphQLString)},
    rut: {type: GraphQLNonNull(GraphQLString)}
  })

})

exports.customerType = customerType