"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import VideoCreateOption from './_components/VideoCreateOption';
import axios from 'axios';
import { useUser } from '@clerk/nextjs';
import UserVideoList from './_components/UserVideoList';

function Dashboard() {
  const [videoList,setVideoList]=useState([]);
  const {user}=useUser();
  
  useEffect(()=>{
    user&&GetUserVideoList();
  },[user])

  const GetUserVideoList=async()=>{
    const result=await axios.get('/api/video?userEmail='+user?.primaryEmailAddress?.emailAddress);
    console.log(result.data);
    setVideoList(result.data)
  }
  return (
    <div className='p-10'>
      <h2 className='text-2xl font-bold'>Dashboard</h2>
      {videoList.length==0?
      <VideoCreateOption/>
      :<UserVideoList videoList={videoList}/>
      }
    </div>
  )
}

export default Dashboard