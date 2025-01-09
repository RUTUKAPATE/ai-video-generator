import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <div className='flex p-5 shadow-md justify-end'>
      {/* <Image src={'/logo.png'} alt='logo' width={35} height={35} /> */}
      <UserButton/>
    </div>
  )
}

export default Header