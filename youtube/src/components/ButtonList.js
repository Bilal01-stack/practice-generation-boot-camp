import React from 'react'
import Button from './Button'

const list = ["All","Gaming","Circket","Entertainment","News","Movies","Trending","Commedy","Top Trending","Hollywood"]
export default function ButtonList() {
  return (
    <div className='flex'>
      {list.map((e,index)=>{
       return <Button name={e} key={index}/>
      })}
      {/* <Button name= "All"/>
      <Button name= "Gaming"/>
      <Button name= "Circket"/>
      <Button name= "Entertainment"/>
      <Button name= "News"/>
      <Button name= "Movies"/>
      <Button name= "Trending"/>
      <Button name= "Commedy"/>
      <Button name= "Top Trending"/>
      <Button name= "Hollywood"/> */}
    </div>
  )
}
