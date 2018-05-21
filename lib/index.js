import express from 'express';
import graphqlHTTP from 'express-graphql';
import mongoose from 'mongoose';


import schema from './graphql';
// App setup
var app = express();

// GraphQl server routes 
app.use('/graphql', graphqlHTTP(req => ({
    schema,
    pretty: true,
    graphiql:true
})));

// Connect mongo database 
// mongoose.connect('mongodb://localhost/school');
var uristring = 'mongodb://localhost/school';
mongoose.connect(uristring, (err, res) => {
  if (err) {
  console.log ('ERROR connecting to: ' + uristring + '. ' + err);
  } else {
  console.log ('Succeeded connected to: ' + uristring);
  }
})

// Start server
var server = app.listen('2122',()=>{
	console.log('listen request on port 2122');
})