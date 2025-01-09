"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

function Dashboard() {
  const [videoList,setVideoList]=useState([]);
  return (
    <div className='p-10'>
      <h2 className='text-2xl font-bold'>Dashboard</h2>
      {videoList.length==0&&<div className='p-5 rounded-lg border mt-10 bg-gray-100'>
        <h2 className='font-bold text-2xl text-center'>Let's create your first video</h2>
        <div className='flex gap-5 items-center justify-center mt-5'>
          <Link href={'/create-ai-video'}>
            <div className='border rounded-lg p-4 w-full cursor-pointer hover:bg-gray-100'>
              <Image src={'/magic-ward.png'} alt='magic-ward' width={40} height={40} />
              <h2 className='text-lg'>Generate with AI</h2>
            </div>
          </Link>
          <Link href={'/editor'}>
            <div className='border rounded-lg p-4 w-full cursor-pointer hover:bg-gray-100'>
              <Image src={'/video-editing.png'} alt='magic-ward' width={40} height={40} />
              <h2 className='text-lg'>Create from scratch</h2>
            </div>
          </Link>
        </div>
      </div>}
    </div>
  )
}

export default Dashboard