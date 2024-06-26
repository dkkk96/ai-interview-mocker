import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

function WhySection() {
  return (
    <div>
        <section>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
        <img
          alt=""
          src="https://blob.cloudcomputing.id/images/96cdf0f3-cc2e-4a71-abf0-486cadfb90ab/logo-gemini-l-min.jpg"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      <div className="lg:py-24">
        <h2 className="text-3xl font-bold sm:text-4xl">Master your skills with Gemini AI</h2>

        <p className="mt-4 text-gray-600">
        Mockbot validate your answers with Google's Gemini AI, ensuring thorough feedback and identifying areas for improvement.
        </p>

        <Link href={'/dashboard'}><Button varaint="outline"
        
        className="mt-4 block rounded border border-primary bg-primary px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-primary focus:outline-none focus:ring active:text-primary sm:mt-6" 
      >
        Get Started Today
      </Button></Link>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default WhySection