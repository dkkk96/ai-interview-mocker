"use client"
import { Button } from '@/components/ui/button'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { db } from '@/utils/db'
import { UserAnswer } from '@/utils/schema'
import { eq } from 'drizzle-orm'
import { ChevronsUpDown } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

function Feedback({params}) {
    const [feedbackList,setFeedbackList] = useState([]);
    const [overallRating,setOverallRating] = useState(0);
    const router = useRouter();
    let totalRating = 0;
    const GetFeedback = async()=>{
        const result = await db.select().from(UserAnswer).where(eq(UserAnswer.mockIdRef,params.interviewID)).orderBy(UserAnswer.id);
        console.log(result);
        setFeedbackList(result);
    }

    useEffect(()=>{
        GetFeedback();
        

    },[])

    useEffect(() => {
      // Calculate overall rating by accumulating ratings
      if (feedbackList.length > 0) {
        let totalRating = 0;
        feedbackList.forEach(item => {
          totalRating = totalRating + Number(item.rating);
        });
        setOverallRating(totalRating/feedbackList.length);
      }
    }, [feedbackList]);

  return (
    <div className='p-10'>
     
        {(feedbackList.length == 0)?<h2>No Interview Feedback Record Found</h2>:
        <>
           <h2 className='text-3xl font-bold text-green-500'>Congratulations!</h2>
           <h2 className='font-bold text-2xl'>Here is your interview feedback</h2>
        <h2 className='text-primary text-lg my-3'>Your overall interview rating:<strong>{overallRating}</strong></h2>

<h2 className='text-sm text-gray-500 font-bold'>Find below interview question with correct answer and feedback for improvement</h2>
{feedbackList&&feedbackList.map((item,index)=>(
    
    <Collapsible className='mt-7' key={index}>
    <CollapsibleTrigger className='p-2 bg-secondary rounded-lg my-2 text-left flex justify-between gap-7'>
    {item.question}<ChevronsUpDown className='h-5 w-5'/>
    </CollapsibleTrigger>
    <CollapsibleContent>
      <div className='flex flex-col gap-10 w-full'>
        <h2 className='text-red-500 border rounded-lg p-2 w-28'><strong>Rating: </strong>{item.rating}</h2>
      </div>
      <h2 className='p-2 border rounded-lg bg-red-50 text-red-900 mt-2'><strong>Your Answer: </strong>{item.userAns}</h2>
      <h2 className='p-2 border rounded-lg bg-green-50 text-green-900 mt-2'><strong>Correct Answer: </strong>{item.correctAns}</h2>
      <h2 className='p-2 border rounded-lg bg-blue-50 text-blue-900 mt-2'><strong>Feedback: </strong>{item.feedback}</h2>
    </CollapsibleContent>
  </Collapsible>
))}
        
        </>}
        
        <Button className='mt-3' onClick={()=>router.replace('/dashboard')}>Go Home</Button>
    </div>
  )
}

export default Feedback