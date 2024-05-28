import React from 'react'
import Image from 'next/image';

const CartModal = () => {

    const cartItems=true;

  return (
    <>
        <div className="w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 right-12 flex flex-col gap-6 z-20">
        {!cartItems ?
            (
                <div className="">Cart is Empty</div>
            ) :

            (
                <>
                    <h3 className='text-xl p-2'>Shopping Cart</h3>
                    <Image src="https://images.pexels.com/photos/1239403/pexels-photo-1239403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width={72} height={72} className='object-cover rounded-md' />
                    <div className="">
                        <div className="flex items-center justify-between gap-8">
                            <h3 className="font-semibold">Product Name</h3>
                            <div className="p-1 grayscale-">49$</div>
                        </div>

                        <div className="">
                            available
                        </div>
                     </div>

                     <div className="">
                            <span className=''>Qty.2</span>
                            <span className=''>Remove</span>
                     </div>
                </>

            )
            
        }
        </div>  
    </>
  )
}

export default CartModal