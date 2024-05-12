import {UserList,MovieList} from "../db.js";

const resolvers = {
    Query:{
        users: ()=>{
            return UserList
        },
        user:(parentValue,{id})=>{
            return UserList.find(user => user.id == id)
        },
        movies:()=>{
            return MovieList
        },
        movie:(parentValue,{name})=>{
            return MovieList.find(movie => movie.name === name)
        }
    },
    User:{
        friend:(parent)=>{
            let res = []
            UserList.forEach((user)=>{
                if(parent.friendId && parent.friendId.find((userID)=>{
                    return user.id === userID
                })) res.push(user)
                
            })
            return res;
        }
    },
    Mutation:{
        createUser:(parentValue,args)=>{
            let user = args.input;
            let last_user = UserList.splice(-1)[0]
            user.id = Number(last_user.id)+1
            UserList.push(args.input)
            return user;
        }
    }
}

export default resolvers