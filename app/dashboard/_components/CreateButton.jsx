import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
  
function CreateButton() {
  return (
    <div>
        <Dialog>
            <DialogTrigger asChild>
                <Button className="w-full bg-black">+ Create New Video</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="text-center font-2xl">Let's create a  new video</DialogTitle>
                    <DialogDescription>
                        <div className='flex gap-5 items-center justify-center mt-5'>
                            <Link href={'/create-ai-video'}>
                                <div className='border rounded-lg p-4 w-full cursor-pointer hover:bg-gray-100'>
                                    <Image src={'/magic-ward.png'} alt='magic-ward' width={40} height={40}/>
                                    <h2 className='text-lg'>Generate with AI</h2>
                                </div>
                            </Link>
                            <Link href={'/editor'}>
                                <div className='border rounded-lg p-4 w-full cursor-pointer hover:bg-gray-100'>
                                    <Image src={'/video-editing.png'} alt='magic-ward' width={40} height={40}/>
                                    <h2 className='text-lg'>Create from scratch</h2>
                                </div>
                            </Link>
                        </div>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>

        
    </div>
  )
}

export default CreateButton