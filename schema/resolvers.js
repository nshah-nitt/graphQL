import {UserList} from "../db.js";

const resolvers = {
    Query:{
        users: ()=>{
            return UserList
        },
        user:(parentValue,{id})=>{
            return UserList.find(user => user.id == id)
        }
    },
    User:{
        friend:(parent)=>{
            let res = []
            UserList.forEach((user)=>{
                if(parent.friendId.find((userID)=>{
                    return user.id === userID
                })) res.push(user)
                
            })
            return res;
        }
    }
}

export default resolvers