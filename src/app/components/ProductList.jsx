import React from 'react';
import Image from 'next/image';
import Button from './Button';


const ProductList = () => {


  const list=[
    {
      id:1,
      src:`https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`,
      productName:`Blue Sea Shoes`,
      price:`RM99`, 
      description:`Perfect size, nice closure `,
    },

    {
      id:2,
      src:`https://images.pexels.com/photos/297933/pexels-photo-297933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`,
      productName:`Black White Shirt`,
      price:`RM70`, 
      description:`Perfect size, nice closure`,
    },


    {
      id:3,
      src:`https://images.pexels.com/photos/1124465/pexels-photo-1124465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`,
      productName:`Nike Cap`,
      price:`RM120`, 
      description:`Perfect size, nice closure`,
    },


    {
      id:4,
      src:`https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`,
      productName:`Sport Shoes`,
      price:`RM150`, 
      description:`Perfect size, nice closure `,
    },



  ]
  return (
    <div className="relative container md:mx-auto p-10 md:grid md:grid-cols-4 md:gap-7 ">
      { list.map((item,index) =>
        ( 
             <div className="flex flex-col justify-between" key={index}>
                <Image src={`${item.src}`} width={1980} height={1080} className="object-cover relative h-72 w-96 rounded" alt="featured" />
                <div className="flex flex-row flex-wrap justify-between mt-4 mb-4">
                  <p className="font-semibold md:text-xl text-left">{item.productName}</p>
                  <p className="font-semibold md:text-xl md:text-right">{item.price}</p>
                </div>
                <div className="relative container mx-auto">
                  <p className="text-left text-md">{item.description}</p>
                  <Button className="relative rounded-2xl py-4 px-4 text-red-500 mt-4 outline outline-red-500 mb-10" title="Add Cart" />
                </div>
           </div>
        ))
       }
      
    </div>
  )
}

export default ProductList