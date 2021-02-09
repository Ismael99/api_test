import express from 'express';

//Herramienta grafica 
import {graphqlHTTP} from 'express-graphql';

//Importamos el esquema
import users_schema from './schema/users';

//DB
import {connect} from './db/connect';


const app = express();

connect();

app.use('/users', graphqlHTTP({
    graphiql: true,
    schema: users_schema,
}))

app.listen(3000, () => {
    console.log("Listening on port 3000");
})

