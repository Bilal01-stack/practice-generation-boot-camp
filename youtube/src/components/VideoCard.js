import React from 'react'

export default function VideoCard({info}) {
    console.log(info);
     const {snippet,statistics}  = info;
     const {channelTitle,title,thumbnails} = snippet;
  return (
    <div>
      <img alt="video thumbnail" src={thumbnails.high.url} />
      <ul>
        <li>{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount}</li>
      </ul>
    </div>
  )
}
