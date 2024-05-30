import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import Button from '../components/Button';

const ListPage = () => {
  return (
    <div className="px-4 py-4 md:px-8 lg:px-16 xl:32 2xl:px-64 relative">
        <div className="bg-pink-100 p-4 flex justify-between h-64">
            <div className="w-2/3 flex flex-col items-center justify-center gap-8">
                <h1 className="px-8 py-4 text-5xl font-semibold">Grab up to 50% off on selected Products</h1>
                <Button className="relative rounded-3xl py-4 px-4 text-white mt-4  bg-pink-600 mb-10 text-md" title='Buy Now' />
            </div>
            <div className="relative w-52 h-52 top-8 right-8">
                <Image width={1000}  height={1000}className="object-contain" alt="banner" src="/assets/woman.png" />
            </div>

        </div>

    </div>
  )
}

export default ListPage;