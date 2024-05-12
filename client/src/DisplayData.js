import React from 'react'
import {useQuery,gql} from "@apollo/client"
import { QUERY_ALL_USERS } from './query'

const DisplayData = () => {
    const {data,loading,error} = useQuery(QUERY_ALL_USERS)
  return (
    <div>
      { data && data['users'].map((item)=>{
        return(
            <div>
                <h1>Name:{item.name}</h1>
                <h2>age:{item.age}</h2>
            </div>
        )
      }) }
    </div>
  )
}

export default DisplayData
