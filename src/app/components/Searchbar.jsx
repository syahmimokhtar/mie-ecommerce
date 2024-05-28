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
            placeholder="Search..."
            className="w-96 flex-1 items-center bg-[#E8E2E0] p-2 rounded-md m-4"
            value={searchTerm}
            onChange={handleChange}
        />
        <button className="cursor-pointer">
            <Image src="/assets/search.png" alt="" width={20} height={20} />
        </button>
    </form>
  )
}

export default Searchbar;