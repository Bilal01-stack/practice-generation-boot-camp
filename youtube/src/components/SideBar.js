import React from 'react'
import { useSelector } from 'react-redux'
import store from '../utils/store'

export default function SideBar() {
  const isMenuOpen = useSelector(store =>store.app.isMenuOpen )
  if (!isMenuOpen) return null;
  return (
    <div className='p-5 shadow-lg col-span-1 w-40'>
      <ul>
        <li>Home</li>
        <li>Shorts</li>
        <li>Videos</li>
        <li>Lives</li>
      </ul>
      <h1 className='font-bold pt-5'>Subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h1 className='font-bold pt-5'>Watch Later</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
  )
}
