import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

const CategoryList = () => {

    const list=[
        {
            id:1,
            imageSrc:`https://images.pexels.com/photos/8310726/pexels-photo-8310726.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`,
            categoryName:"health"
        },

        {
            id:1,
            imageSrc:`https://images.pexels.com/photos/8310726/pexels-photo-8310726.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`,
            categoryName:"Swimming"
        },

        {
            id:2,
            imageSrc:`https://images.pexels.com/photos/8310726/pexels-photo-8310726.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`,
            categoryName:"Cosmetics"
        },

        {
            id:3,
            imageSrc:`https://images.pexels.com/photos/8310726/pexels-photo-8310726.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`,
            categoryName:"Sports"
        },

        {
            id:4,
            imageSrc:`https://images.pexels.com/photos/8310726/pexels-photo-8310726.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`,
            categoryName:"Travel"
        },

        {
            id:5,
            imageSrc:`https://images.pexels.com/photos/8310726/pexels-photo-8310726.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`,
            categoryName:"Office"
        },

        {
            id:6,
            imageSrc:`https://images.pexels.com/photos/8310726/pexels-photo-8310726.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`,
            categoryName:"Wedding"
        },
    ]


  return (
    <div className="px-4 overflow-x-scroll">

        <div className="flex gap-4 md:gap-8">

            {list.map((item,index) =>
                ( 
                    <Link key={index} href='/list?cat=test' className='flex flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'>

                        <div className="flex flex-col">
                            <div className="relative bg-slate-100 w-full h-96">
                                <Image width={1980} height={1080} className="w-full h-full rounded-md object-cover" src="https://images.pexels.com/photos/8310726/pexels-photo-8310726.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="cat"  />
                            </div>
                            <h1 className='mt-8 font-semibold text-center text-2xl'>{item.categoryName}</h1>
                        </div>
                       
                    </Link>
                )
            )}
               
        </div>
    </div>
  )
}

export default CategoryList