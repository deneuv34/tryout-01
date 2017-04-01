// import express and GraphQL
const express = require('express');
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');

// Construct a schema using GraphQL
var schema = buildSchema(`
  type Query {
    name(first: String!, last: String): String
    chat(data: String): String
  }
`); // String! symbol mean is String cannot be null

// The root provide a resolver function for each of API endpoint
var root = {
  name: ({first, last}) => {
    return first+' '+last;
  },
  chat: ({ data }) => {
    return data;
  }
};

var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

app.listen(8081);
console.log('Runing a graphql API Server in localhost:8081/graphql');
