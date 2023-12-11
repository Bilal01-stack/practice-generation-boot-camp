import React from 'react'

export default function VideoCard({info}) {
  if(!info || !info.snippet||!info.statistics){
    return <p>Can not fetch the api</p>
  }
    console.log(info);
     const {snippet,statistics}  = info;
     const {channelTitle,title,thumbnails} = snippet;
  return (
    <div className='p-2 m-2 w-56 shadow-lg'>
      <img className='rounded-lg' alt="video thumbnail" src={thumbnails.medium.url} />
      <ul>
        <li className='font-bold py-2'>{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} Views</li>
      </ul>
    </div>
  )
}
