import React,{useEffect, useState} from "react";
import { useSearchUsersQuery } from "../store/github/github.api";
import { useLazyGetUserReposQuery } from "../store/github/github.api";
import { useDebaunce } from "../hooks/debaunce";
import { RepoCard } from "../components/RepoCard";

export function Home() {
  const [search, setSearch] =useState('')
  const debaunced = useDebaunce(search)
  const [dropdown, setDropdown]=useState(false)
  const { isLoading, isError, data } = useSearchUsersQuery(debaunced,{
    skip: debaunced.length < 3
  });
 
  const [fethRepos, {isLoading:reposLoading, data:repos}] = useLazyGetUserReposQuery()
      
  useEffect(()=>{
    setDropdown(debaunced.length > 3 && data?.length! > 0)
  },[debaunced, data])

  const clickHandler=(username:string)=>{
    fethRepos(username)
    setDropdown(false)
  }

  return (
    <div className="flex justify-center pt-10 mx-auto h-screen w-screen">
      {isError && <p className="teaxt-center text-red-600">Ошибачкаg</p>}

      <div className="relative w-[560px]">
        <input
          type="text"
          className="border py-2 px-4 w-full h-[42px] mb-2"
          placeholder="Поиск пользователей..."
          value={search}
          onChange={e=> setSearch(e.target.value)}
        />
        {dropdown && <ul className="list-none absolute top-[42px] left-0 right-0 max-h-[200px] overflow-y-scroll shadow-md bg-white">
          {isLoading && <p className="text-center">Загрузка...</p>}
          {data?.map(user=>(
            <li key={user.id}
            onClick={()=>clickHandler(user.login)}
            className='py-2 px-4 hover:bg-gray-500 hover:text-white transition-colors cursor-pointer'
            >{user.login}</li>
          ))}
        </ul>}
        <div className="conatiner">
            {reposLoading && <p className="text-center">Еще одна загрузка...</p>}
            {repos?.map(repo => <RepoCard repo={repo} key={repo.id}/>)}
      </div>
      </div>
    </div>
  );
}
