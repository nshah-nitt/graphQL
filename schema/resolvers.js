import {UserList} from '../db.js'

const resolvers = {
    Query:{
        users(){
            return UserList
        }
    }
}

export default resolvers