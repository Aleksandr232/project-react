import React from "react";
import { IRepo } from "../modules/mdules";
import { useActions } from "../hooks/actions";

export function RepoCard({repo}:{repo:IRepo}){

    const {addFavorite, removeFavorite} = useActions()
    const 
 

    const addFavorited = (event:React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()

        addFavorite(repo.html_url)
        console.log(repo.html_url)
    }

    const removeFavorited = (event:React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()

        removeFavorite(repo.html_url)
        console.log(repo.html_url)
    }

    return(
        <div className="border py-3 px-5 rounded mb-2 hover:shadow-md hover:bg-gray-100 transition-all">
            <a href={repo.html_url} target='blank'>
                <h2 className="text-lg font-bold">{repo.full_name}</h2>
                <p className="text-sm">
                    Вилок: <span className="font-bold mr-2">{repo.forks}</span>
                    Наблюдателей: <span className="font-bold">{repo.watchers}</span>
                </p>
                <p className="text-sm font-thin">{repo?.description}</p>

                <button className="py-2 px-4 bg-yellow-400 mr-2 rounded hover:shadow-md transition-all"
                onClick={addFavorited}
                >Добавить</button>
                <button className="py-2 px-4 bg-red-400 rounded hover:shadow-md transition-all"
                onClick={removeFavorited}
                >Удалить</button>
            </a>
        </div>
    )
}