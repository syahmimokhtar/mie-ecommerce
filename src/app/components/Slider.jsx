
"use client";
import React ,  {useState, useEffect}  from 'react'
import Image from 'next/image';
import Button from './Button';

const Slider = () => {

    const slides = [
        {
          id: 1,
          title: "Summer Sale Collections",
          description: "Sale! Up to 50% off!",
          img: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800",
          url: "/",
          bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
        },
        {
          id: 2,
          title: "Winter Sale Collections",
          description: "Sale! Up to 50% off!",
          img: "https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800",
          url: "/",
          bg: "bg-gradient-to-r from-pink-50 to-blue-50",
        },
        {
          id: 3,
          title: "Spring Sale Collections",
          description: "Sale! Up to 50% off!",
          img: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800",
          url: "/",
          bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
        },
      ];


    const [current, setCurrent]  =useState(0);

    
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);


  return (
    <div className="h-[calc(100vh-80px)] overflow-hidden">
        <div className="w-max h-full flex transition-all ease-in-out duration-1000" style={{ transform: `translateX(-${current * 100}vw)` }}>

            {slides.map((slide) => (
            <div  className={`${slide.bg} w-screen h-full flex flex-col gap-16 xl:flex-row`}  key={slide.id}>
                <div className="md:grid md:grid-cols-2 gap-2">
                    {/* description */}
                    <div className="relative container md:mx-auto md:my-72 ">
                        <h3 className="text-center text-5xl m-5">{slide.title}</h3> 
                        <h2 className="font-bold text-center md:text-7xl text-5xl text-balance   ">{slide.description}</h2> 
                        <Button className="text-xl text-center md:left-96 left-28 md:w-40 w-40 container md:mx-auto relative cursor-pointer rounded-md bg-black text-white py-4 px-4 m-12 " title="Shop Now" />
                    </div>


                    {/* image slider */}
                    <div className="relative">
                        <Image src={`${slide.img}`} className="object-cover" alt="image" width={1000} height={1000}   />
                    </div>

                </div>

            

            </div>

            ))}


            <div className="absolute m-auto left-1/2 bottom-8 flex gap-4">
                {slides.map((slide, index) => (
                <div
                    className={`w-3 h-3  rounded-full ring-1 ring-gray-600 cursor-pointer flex items-center justify-center ${
                    current === index ? "scale-150" : ""
                    }`}
                    key={slide.id}
                    onClick={() => setCurrent(index)}
                >


                  {current === index && (
                    <div className="w-[6px] h-[6px] bg-gray-600 rounded-full"></div>
                    )}
                </div>
                ))}
            </div>


        </div>

    </div>
  )
}

export default Slider