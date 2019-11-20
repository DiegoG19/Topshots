const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const axios = require ("axios");
const graphqlHttp = require("express-graphql");
const mongoose = require('mongoose');

const graphQlSchema = require('./graphql/schema/index');
const graphQlResolvers = require('./graphql/resolvers/index');

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//helps create the schema
//treat the property of a object 
app.use('/graphiql', graphqlHttp({
  schema: graphQlSchema,
  rootValue: graphQlResolvers ,
  graphiql: true

  
}));
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
app.get("/api/games", (req, res) => {
  console.log(req.query.name)
  axios({
    url: "https://api-v3.igdb.com/games",
    method: 'POST',
    headers: {
        'Accept': 'application/atom+xml',
        'user-key': '8f6aca1b385bc531765d7a3cc7625bda'
    },
    data: `fields cover,name,rating,artworks,first_release_date; search "${req.query.name}";`
  })
    .then(response => {
        console.log(response.data);
       res.json(response.data)
    })
    .catch(err => {
        console.error(err);
        res.send(err)
    });
})
// Send every other request to() the React app
// Define any API routes before this runs

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@topshots-3qk3f.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`)
.then(() => {
  app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
})
.catch(err => {
console.log(err);
})
});