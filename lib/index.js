import express from 'express';
import graphqlHTTP from 'express-graphql';


import schema from './graphql';
// App setup
const app = express();

app.use('/graphql', graphqlHTTP(req => ({
    schema,
    pretty: true,
    graphiql:true
})));
const server = app.listen('2122',function(){
	console.log('listen request on port 2122');
})