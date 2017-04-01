// import express and GraphQL
const express = require('express');
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');

// Construct a schema using GraphQL
var schema = buildSchema(`
  type Query {
    name: String
  }
`); // String! symbol mean is String cannot be null

// The root provide a resolver function for each of API endpoint
var root = {
  name: () => {
    return 'Halo nama saya adalah Rangga';
  },
};

var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: false,
}));

app.listen(4000);
console.log('Runing a graphql API Server in localhost:4000/graphql');
