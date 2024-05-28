import React from "react";
import Image from "next/image";

const CartModal = () => {
  const cartItems = true;

  return (
    <>
      <div className="w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 right-12 flex flex-col gap-6 z-20">
        {!cartItems ? (
          <div className="">Cart is Empty</div>
        ) : (
          <>
            <h3 className="text-xl p-2">Shopping Cart</h3>
            <div className="flex flex-col gap-8">
              {/* Flex container to align image and details side by side */}
              <div className="flex gap-4">
                <Image
                  src="https://images.pexels.com/photos/1239403/pexels-photo-1239403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                  width={72}
                  height={72}
                  className="object-cover rounded-md"
                />
                <div className="flex flex-col justify-between w-full">
                    <div className="flex flex-row">
                      <h3 className="font-semibold mr-4">Product Name</h3>
                      <div className=" bg-gray-50 font-semibold rounded-sm">$49</div>
                    </div>
                    <div className="font-italic mt-2">available</div>


                  <div className="mt-2">
                    <div className="flex justify-between w-full">
                      <span>Quantity : 2</span>
                      <span className="cursor-pointer font-bold  text-red-500">
                        Remove
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartModal;
