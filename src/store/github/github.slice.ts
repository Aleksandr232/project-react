import {createSlice, PayloadAction} from '@reduxjs/toolkit'

const localstrge ='rfk'

interface GithubState{
    favorites: string[]
}

const initialState: GithubState={
    favorites:JSON.parse(localStorage.getItem(localstrge)?? '[]')
}

export const githubSlice = createSlice({
    name:'github',
    initialState,
    reducers:{
        addFavorite(state, action:PayloadAction<string>){
            state.favorites.push(action.payload)
            localStorage.setItem(localstrge, JSON.stringify(state.favorites))
        },
        removeFavorite(state, action:PayloadAction<string>){
            state.favorites=state.favorites.filter(f=>f !== action.payload)
            localStorage.setItem(localstrge, JSON.stringify(state.favorites))
        },
    }
})

export const githubActions = githubSlice.actions
export const githubReducer = githubSlice.reducer