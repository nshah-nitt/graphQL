import {gql} from "@apollo/client"
export const QUERY_ALL_USERS = gql`
    query getAllusers{
        users{
            id
            age
            name
            nationality
            friend{
                name
            }
        }
    }
`