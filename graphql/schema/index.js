const { buildSchema } = require('graphql');

module.exports =  buildSchema(`
type Event{
  _id: ID!
  name: String!
  rating: Float!
  releasedate: String!
}
type User{
  _id: ID!
  email: String!
  password: String
}
type LoginData{
  userID: ID!
  token: String!
  tokenExpiration: Int!
}
input EventInput{
  name: String!
  rating: Float!
  releasedate: String!
}
input UserInput{
  email:String!
  password: String!
}
type RootQuery{
   events:[Event!]!
   login(email: String!, Password: String!): LoginData!
}
type RootMutation{
  createEvent(eventInput: EventInput): Event
  createUser(userInput: UserInput): User
}
schema{
  query: RootQuery
  mutation: RootMutation
}
`);