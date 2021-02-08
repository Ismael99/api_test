import express from 'express';

//Herramienta grafica 
import {graphqlHTTP} from 'express-graphql';


const app = express();

app.use('/users', graphqlHTTP, {
    graphiql: true,
    schema: users,
})

app.listen(3000, () => {
    console.log("Listening on port 3000");
})

