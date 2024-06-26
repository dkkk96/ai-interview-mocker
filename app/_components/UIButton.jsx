import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

function UIButton() {
  return (
    <div>
    

<button className="group relative inline-block text-sm font-medium text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
  href="#">
  <span
    className="absolute inset-0 translate-x-0.5 translate-y-0.5 bg-indigo-600 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"
  ></span>

  
  <Link href={'/sign-in'}><span className="relative block border border-current bg-white px-8 py-3 "> Sign in </span></Link>

</button>

{/* Hover */}


    </div>
  )
}

export default UIButton