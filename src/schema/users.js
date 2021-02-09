//Schema, los atributos o propiedades que se podran consulta en determinada ruta.

// Crear un nuevo schema
import {makeExecutableSchema} from 'graphql-tools'; 

//Para definir lo que se hará cuando se recibe una peticion
import users_resolvers from '../resolvers/users';

//Definicion de Tipos, lo que se podra consultar
//Primero se define aqui  luego en el resolvers

const typeDefs = `
    type User{
        _id: ID!,
        user_first_name: String!,
        user_last_name :String!,
        user_age: Int!,
    }

    input inputUser{
        user_first_name: String!,
        user_last_name :String!,
        user_age: Int!,
    }

    input inputUserUpdate{
        user_first_name: String,
        user_last_name: String,
        user_age: Int,
    }

    type Query{
        users: [User],
    }

    type Mutation{
        createUser(input: inputUser!): User
        updateUser(_id: ID!,  input: inputUserUpdate!): User
        deleteUser(_id: ID!): User
    }

`

const schema = makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: users_resolvers,
})

export default schema;