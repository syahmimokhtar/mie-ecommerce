import React from 'react'

const Button = ({title, handleClick, ...otherProps}) => {
  return (
    <button onClick={handleClick} {...otherProps}>
        {title}
    </button>
  )
}

export default Button