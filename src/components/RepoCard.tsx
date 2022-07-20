import React,{useState} from "react";
import { IRepo } from "../modules/mdules";
import { useActions } from "../hooks/actions";
import { useAppSelector } from "../hooks/redux";

export function RepoCard({repo}:{repo:IRepo}){

    const {addFavorite, removeFavorite} = useActions()
    const {favorites} = useAppSelector(state => state.github)

    const [isFav, setIsFav]= useState(favorites.includes(repo.html_url))
 

    const addFavorited = (event:React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        addFavorite(repo.html_url)
        console.log(repo.html_url)
        setIsFav(true)
    }

    const removeFavorited = (event:React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        removeFavorite(repo.html_url)
        console.log(repo.html_url)
        setIsFav(false)
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

                {!isFav && <button className="py-2 px-4 bg-yellow-400 mr-2 rounded hover:shadow-md transition-all"
                onClick={addFavorited}
                >Добавить</button>}

                {isFav && <button className="py-2 px-4 bg-red-400 rounded hover:shadow-md transition-all"
                onClick={removeFavorited}
                >Удалить</button>}
            </a>
        </div>
    )
}