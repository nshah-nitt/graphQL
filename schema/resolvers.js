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
        },
        modifyUser:(parent,args)=>{
            let user = UserList.find(user=> user.id==args.input.id)
            user.name = args.input.name || user.name
            user.username = args.input.username || user.username
            user.age = args.input.age || user.age
            user.nationality = args.input.nationality || user.nationality

            return user;

        },
        deleteUser:(parent,args)=>{
            let user_index = UserList.findIndex(user=>user.id==args.input.id)

            UserList.splice(user_index,1)
            return "User deleted Successfully"
        }
    }
}

export default resolvers