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
    <div className="relative container md:mx-28 mx-24 md:grid md:grid-cols-4 md:gap-4 justify-between">
      { list.map((item,index) =>
        ( 
          <> 
              <div className="flex flex-col justify-between"  key={index}>
                  <Image src={`${item.src}`} width={1980} height={1080} className='object-cover relative h-72 w-72 rounded' alt="featured" />
                  <div className="flex-row flex justify-between">
                      <p className="font-semibold md:text-xl text-center md:text-left  mt-4 md:mr-10" >{item.productName}</p>
                      <p className="font-semibold md:text-xl  text-center  md:text-left mt-4 mb-4" >{item.price}</p>
                  </div>
                  
                  <div className='relative container-mx-auto'>
                      <p className="text-left text-md" >{item.description}</p>
                      <Button className="relative rounded-2xl py-4 px-4 text-red-500 mt-4 outline  outline-red-500" title="Add Cart" />
                  </div>
              </div>
            </>
        ))
       }
      
    </div>
  )
}

export default ProductList