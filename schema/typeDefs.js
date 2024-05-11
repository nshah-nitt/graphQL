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

    type Query{
        users:[User!]!,
        user(id:ID!):User
    }
`

export default typeDefs