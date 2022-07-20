import React,{useEffect, useState} from "react";
import { useSearchUsersQuery } from "../store/github/github.api";
import { useDebaunce } from "../hooks/debaunce";

export function Home() {
  const [search, setSearch] =useState('')
  const debaunced = useDebaunce(search)
  const { isLoading, isError, data } = useSearchUsersQuery(debaunced,{
    skip: debaunced.length < 3
  });
 
      
  useEffect(()=>{
    console.log(debaunced)
  },[debaunced])


  return (
    <div className="flex justify-center pt-10 mx-auto h-screen w-screen">
      {isError && <p className="teaxt-center text-red-600">Ошибачка</p>}

      <div className="relative w-[560px]">
        <input
          type="text"
          className="border py-2 px-4 w-full h-[42px] mb-2"
          placeholder="Поиск пользователей..."
          value={search}
          onChange={e=> setSearch(e.target.value)}
        />
        <ul className="list-none absolute top-[42px] left-0 right-0 max-h-[200px] overflow-y-scroll shadow-md bg-white">
          {isLoading && <p className="text-center">Загрузка...</p>}
          {data?.map(user=>(
            <li key={user.id}
            className='py-2 px-4 hover:bg-gray-500 hover:text-white transition-colors cursor-pointer'
            >{user.login}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
