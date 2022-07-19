import React,{useEffect, useState} from "react";
import { useSearchUsersQuery } from "../store/github/github.api";
import { useDebaunce } from "../hooks/debaunce";

export function Home() {
  const [search, setSearch] =useState('')
  const { isLoading, isError, data } = useSearchUsersQuery("Aleksandr232");
  const debaunced = useDebaunce(search)
      
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
        <div className="absolute top-[42px] left-0 right-0 max-h-[200px] shadow-md bg-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
          provident nesciunt eveniet impedit labore dicta totam eligendi
          temporibus repellendus veniam animi, magni explicabo voluptatibus
          quidem veritatis accusantium enim nobis? Non?
        </div>
      </div>
    </div>
  );
}
