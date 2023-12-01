import React from 'react'
import { useRouteError } from 'react-router-dom'

export default function Error() {
    const err= useRouteError()
    console.log(err);
  return (
    <>
    <div className='text-5xl font-semibold  items-center justify-center h-screen'>
        <h2 className="text-center">Opps Some Thing Went Wrong</h2>
        <div className='justify-center items-center'>
        <h2 className='text-3xl font-semibold'>{err.status + err.statusText}</h2>
        </div>
    </div>
    </>
  )
}
