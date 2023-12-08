import React from 'react'

export default function Button({name}) {
  return (
    <div>
        <button className='p-2 m-2 bg-gray-200 px-5 py-2 rounded-lg'>{name}</button>
    </div>
  )
}
