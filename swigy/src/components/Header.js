import React from 'react'

export default function Header() {
  return (
    <div className='flex justify-between items-center p-2 m-1 shadow-md'>
        <div className='w-32'>
            <img className='w-24'  at="Logo" src='data:image/png;base64,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' />
        </div>
        <div >
            <ul className='flex'>
                <li className='p-3 font-semibold'>Home </li>
                <li className='p-3 font-semibold'>About</li>
                <li className='p-3 font-semibold'>Contat Us</li>
            </ul>
        </div>
        <div><span className='p-3 font-semibold'>Cart</span></div>
    </div>
  )
}
