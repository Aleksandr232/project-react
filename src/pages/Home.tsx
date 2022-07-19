import React from "react";
import {useSearchUsersQuery} from '../store/github/github.api'

export function Home(){
    const {isLoading, isError}=useSearchUsersQuery('Aleksandr232')
    return(
        <div>ум</div>
    )
}


