"use client"
import { db } from '@/utils/db';
import { MockInterview } from '@/utils/schema';
import { useUser } from '@clerk/nextjs'
import { desc, eq } from 'drizzle-orm';
import React, { useEffect, useState } from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Button } from '@/components/ui/button';
import Link from 'next/link';

function InterviewList() {
    const [interviewList,setInterviewList] = useState([]);
    const {user} = useUser();
    

    useEffect(()=>{
      
        user&&GetInterviewList();
    },[user])

    const GetInterviewList = async()=>{
      
        const result = await db.select().from(MockInterview).where(eq(MockInterview.createdBy,user?.primaryEmailAddress?.emailAddress)).orderBy(desc(MockInterview.id));
        console.log(MockInterview.createdBy);
        console.log(user?.primaryEmailAddress?.emailAddress);
        console.log(result);
        setInterviewList(result);
    }

  return (
    <div>
        <h2 className='font-medium text-xl '>Previous Mock Interview</h2>
        <div className='grid grid-rows-1 lg:grid-cols-4 gap-4'>
            {interviewList&&interviewList.map((interview,index)=>(
                <div className = 'w-100'>
                    <Card >
                <CardHeader>
                  <CardTitle>{interview.jobPosition}</CardTitle>
                  <CardDescription>{`Created at ${interview.createdAt}`}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h2 className='font-bold text-primary'>{`Job Experience: ${interview.jobExp}`}</h2>
                  
                </CardContent>
                <CardFooter>
                <div className='flex gap-20'>
                    <Link href={'/dashboard/interview/'+interview.mockId+'/feedback'}><Button variant="outline" className='hover:scale-110 transition-all w-full'>Feedback</Button></Link>
                    <Link href={'/dashboard/interview/'+interview.mockId}><Button className='hover:scale-110 transition-all w-full'>Retake Interview</Button></Link>
                  </div>
                </CardFooter>
              </Card>
                </div>
              
            ))}
        </div>
    </div>
  )
}

export default InterviewList