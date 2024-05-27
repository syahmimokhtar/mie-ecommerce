"use client";
import Image from "next/image";
import React, {useState} from "react";

const NavIcons = () => {

    const [isProfileOpen, setIsProfileOpen]=useState(false)
    const [isCartOpen, setIsCartOpen]=useState(false);

  return (
    <>
        <div className="flex items-center gap-4 xl:gap-4">
            <Image src="/assets/profile.png" width={28}  height={28} className='cursor-pointer' alt="profile"/>
            {isProfileOpen && (
                <div className="absolute p-4 rounded-md top-12 left-0 bg-white text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20">
                <Link href="/profile">Profile</Link>
                <div className="mt-2 cursor-pointer" >
                    {isLoading ? "Logging out" : "Logout"}
                </div>
                </div>
            )}
            
            <Image src="/assets/notification.png" width={28}  height={28} className='cursor-pointer' alt="notification" />
            <div className='absolute w-8 h-8 md:right-60 md:top-2 text-md rounded-full bg-red-500 text-white text-center font-bold'>2</div>
            <Image src="/assets/cart.png" width={28}  height={28} className='cursor-pointer'  alt="cart"/>
        </div>
    </>
  )
}

export default NavIcons