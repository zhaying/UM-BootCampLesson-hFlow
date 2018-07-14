/**
 * api/controllers/GraphQLController.js
 */
//import { graphql } from 'graphql';
var graphql = require('graphql');
var generateSchema = require('sails-graphql');
//import { generateSchema } from 'sails-graphql';

let schema = null;

module.exports = {
  index(req, res) { // default index action

    if (!schema) {
      schema = generateSchema(sails.models);
    }

    graphql(
      schema,                       // generated schema
      req.body,                     // graphql query string
      null,                         // default rootValue
      {                             // context
        request: sails.request,     // default request method - required
        reqData: {                  // object of any data you want to forward to server's internal request
          headers: {/*your headers to forward */}
        }
      }
    ).then((result) => {
      // errors handling
      res.json(result.data);
    });
  }
};
