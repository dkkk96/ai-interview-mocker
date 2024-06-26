"use client"
import { Button } from '@/components/ui/button';
import { db } from '@/utils/db';
import { MockInterview } from '@/utils/schema';
import { eq } from 'drizzle-orm';
import { Lightbulb, WebcamIcon } from 'lucide-react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import Webcam from 'react-webcam';

function Interview({params}) {
    const [interViewData,setInterviewData] = useState(null);
    const [webCam,setWebCam] = useState(false);
    useEffect(()=>{
        console.log(params.interviewID);
        GetInterviewDetails();
    },[params.interviewID])

    const GetInterviewDetails = async()=>{
        const result = await db.select().from(MockInterview).where(eq(MockInterview.mockId,params.interviewID))
       // console.log(result);
        setInterviewData(result[0]);
        console.log(interViewData);
    }


  return (
    <div className='my-10'>
        <h2 className='font-bold text-2xl'>Let's Get Started</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
        
        <div className='flex flex-col my-5 gap-5 p-5 '>
            <div className='flex flex-col p-5 gap-5 rounded-lg border'>
            <h2><strong>Job Role/Job Position: </strong>{interViewData?.jobPosition}</h2>
            <h2><strong>Job Description: </strong>{interViewData?.jobDesc}</h2>
            <h2><strong>Years of Experience: </strong>{interViewData?.jobExp}</h2>
            </div>
            <div className='p-5 border rounded-lg border-yellow-300 bg-yellow-100'>
                <h2 className='flex gap-2 items-center  text-yellow-500'><Lightbulb/><strong>Information</strong></h2>
                <h2 className='mt-3 text-yellow-500'> To ensure the best experience on our platform, we kindly request
              users to enable their webcam and microphone for recording answers
              during mock interviews. Rest assured, we prioritize your privacy
              and security. All data is securely stored and protected. Your
              success and confidence in job interviews are our priority. Let's
              prepare smart and shine bright!</h2>
            </div>
        </div>
        <div >
        {webCam?<div className='flex justify-center items-center mt-10'><Webcam onUserMedia={()=>setWebCam(true)} onUserMediaError={()=>setWebCam(false)} style={{height:300,width:300}}
            mirrored={true}/></div>: <><WebcamIcon className='h-72 w-full my-7 p-20 bg-secondary rounded-lg border'/>
            <div className='flex justify-center'><Button className='hover:bg-primary hover:text-white hover:scale-110 transition-all' variant="ghost" onClick={()=>setWebCam(true)}>Enable Webcam and Microphone</Button></div></> }
        </div>
        </div>
        <div className='flex justify-end items-end'>
            <Link href={'/dashboard/interview/'+params.interviewID+'/start'}>
            <Button className=' hover:scale-110 transition-all'>Start Interview</Button>
            </Link>
       
        </div>
        
    </div>
  )
}

export default Interview