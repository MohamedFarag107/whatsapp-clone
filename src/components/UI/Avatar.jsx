import React from 'react'

const Avatar = ({img,name}) => {
  return (
    <div className='relative w-fit'>
        <img className='h-16 w-16 rounded-full' src={img} alt={name} />
        <span className='z-10 w-3 h-3 rounded-full absolute bottom-1 right-1 bg-green-400 border-white dark:border-alt-dark border-2' ></span>
    </div>
  )
}

export default Avatar