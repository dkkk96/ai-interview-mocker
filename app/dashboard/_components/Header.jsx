"use client"
import UIButton from '@/app/_components/UIButton'
import { UserButton, useUser } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

function Header() {
    //nextjs hook to get the path of current open page
    const path = usePathname();
    const {user} = useUser();
  return (
    <div className='flex items-center justify-between p-4 bg-secondary shadow-sm '>
        <Link href={'/'}><Image className='cursor-pointer rounded-lg' src={'/logo1.jpg'} width={75} height={100} alt='logo'/></Link>
        <ul className='flex gap-6'>
            <Link href={'/dashboard'}><li className={` cursor-pointer hover:font-bold hover:text-primary hover:scale-110 transition-all ${path=='/dashboard' && 'text-primary font-bold'}`}>DashBoard</li></Link>
            <li className={` cursor-pointer hover:font-bold hover:text-primary hover:scale-110 transition-all ${path=='/questions' && 'text-primary font-bold'}`}>Questions</li>
            <Link href={'/upgrade'}><li className={`cursor-pointer hover:font-bold hover:text-primary hover:scale-110 transition-all ${path=='/upgrade' && 'text-primary font-bold'}`}>Upgrade</li></Link>
            <li className={`cursor-pointer hover:font-bold hover:text-primary hover:scale-110 transition-all ${path=='/how' && 'text-primary font-bold'}`}>How it Works?</li>
        </ul>
        <div  className='hover:scale-125 transition-all'>
          {user?<UserButton/>:<h2><UIButton/></h2>}
        
        </div>
        
    </div>
  )
}

export default Header