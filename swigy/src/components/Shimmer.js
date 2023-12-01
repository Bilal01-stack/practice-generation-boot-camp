import React from 'react'

export default function Shimmer() {
  return (
    <div className='flex flex-wrap'>
    {Array(14).fill("").map((e)=><div className='bg-green-100 w-40 h-60 shadow-green-600 m-2 p-2'>
    </div>)}
    </div>
  )
}
