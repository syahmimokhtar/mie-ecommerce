import React from 'react'

const Button = ({title, handleClick}) => {
  return (
    <button onClick={handleClick} className="text-xl text-center md:left-96 left-28 md:w-40 w-40 container md:mx-auto relative cursor-pointer rounded-md bg-black text-white py-4 px-4 m-12 ">
        {title}
    </button>
  )
}

export default Button