"use client";

import Image from "next/image";
import React , {useState} from "react";
import { useRouter } from "next/navigation";

const Searchbar = () => {

 const router = useRouter();
 const [searchTerm, setSearchTerm]=useState("");

    const handleSubmit=(e)=>
    {
        e.preventDefault();
        if(searchTerm=='')
        {
            return;
        }

    }

    const handleChange=(e)=>
    {
        e.preventDefault();
        setSearchTerm(e.target.value)
    }

  return (
    <form onSubmit={handleSubmit} >

        <input
            type="text"
            name="name"
            placeholder="Search"
            className="flex-1 bg-transparent outline-gray-50"
            value={searchTerm}
            onChange={handleChange}
        />
        <button className="cursor-pointer">
            <Image src="/assets/search.png" alt="" width={16} height={16} />
        </button>


    </form>
  )
}

export default Searchbar;