import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {Server} from '../../modules/mdules'
import { IUser } from '../../modules/mdules'

export const githubApi = createApi({
    reducerPath: 'gihub/api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.github.com/'
    }),
    endpoints: build=>({
        searchUsers: build.query<IUser[], string>({
            query: (search: string)=>({
                url:`search/users`,
                params:{
                    q: search,
                    per_page: 10
                }
            }),
            transformResponse: (response:Server<IUser>)=>response.items
        })
    })
})
    
export const {useSearchUsersQuery} = githubApi