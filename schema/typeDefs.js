import { gql } from "apollo-server"

const typeDefs = gql`
    type User{
        id:ID!
        name:String!
        username:String!
        age:Int!
        nationality:String!
        friendId:[Int]!
        friend:[User]
    }
    type Movie{
        id:ID!
        name:String!
        releaseYear:Int!
        inTheaters:Boolean
    }

    input createUserInput{
        name: String!
        username:String = "noname@123"
        age:Int!
        nationality:String = "Earth"
        friendId:[Int!]
    }

    type Query{
        users:[User!]!,
        user(id:ID!):User,
        movies:[Movie!]!,
        movie(name:String!):Movie
    }

    type Mutation{
        createUser(input:createUserInput!):User
    }
`

export default typeDefs