import React, { useEffect } from 'react'
import { YOU_TUBE_VIDEO_API } from '../utils/constants';
import { useState } from 'react';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

export default function VideoContainer() {
  const [videos, setVideos] =useState([]);
  useEffect(()=>{
        getVideos();
  },[]);
  const getVideos = async ()=>{
    
      const data = await fetch(YOU_TUBE_VIDEO_API);
      const json = await data.json();
      //console.log(json.items);
      setVideos(json.items);
  }
  return (
    <div className='flex flex-wrap'>
      {videos.map((video)=> <Link to={"/watch?v="+ video.id}><VideoCard key={video.id} info={video}/></Link>)}
    </div>
  )
}
