"use client"
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { chatSession } from '@/utils/GeminiAIModel';
import { db } from '@/utils/db';
import { MockInterview } from '@/utils/schema';
import { useUser } from '@clerk/nextjs';
import { LoaderCircle } from 'lucide-react';
import moment from 'moment/moment';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

function AddNewInterview() {
  const [openDailog,setOpenDailog] = useState(false);
  const [jobPosition,setJobPosition] = useState('');
  const [jobDesc,setJobDesc] = useState('');
  const [jobExp,setJobExp] = useState('');
  const [loading, setLoading] =useState(false);
  const [jsonResponse, setJsonResponse] = useState([]);
  const {user} = useUser();
  const router = useRouter();
  const onSubmit=async(e)=>{
    setLoading(true);
    e.preventDefault();
     const InputPrompt="Job Role: "+jobPosition+", Job Description: "+jobExp+", Job Experience: "+jobExp+", Based on details please provide 5 interview questions and answers in json format";
     const result = await chatSession.sendMessage(InputPrompt);
     const mockJSONResponse = (result.response.text().replace('```json','').replace('```',''));
     console.log(JSON.parse(mockJSONResponse));

     if(mockJSONResponse)
      {

      
    const resp = await db.insert(MockInterview).values(
      {
        mockId:uuidv4(),
        jsonMockResp: mockJSONResponse,
        jobPosition: jobPosition,
        jobDesc: jobDesc,
        jobExp: jobExp,
        createdBy: user?.primaryEmailAddress?.emailAddress,
        createdAt: moment().format('DD-MM-YYYY')
      }
    ).returning({mockId:MockInterview.mockId})

    console.log(resp);
    if(resp)
      {
        setOpenDailog(false);
        router.push('/dashboard/interview/'+resp[0]?.mockId);
      }
  }
  else{
    console.log("ERROR");
  }
     setLoading(false);
     

  }
  return (
    <div>
      <div className='p-10 border rounded-lg hover:scale-105 bg-secondary hover:shadow-md cursor-pointer transition-all' onClick={()=>setOpenDailog(true)}>
        <h2 className='font-bold text-lg text-center'>+ Add New</h2>
      </div>
      <Dialog open={openDailog}>
  {/* <DialogTrigger>Open</DialogTrigger> */}
  <DialogContent className='max-w-2xl'>
    <DialogHeader>
      <DialogTitle className='text-2xl'>Tell us more about your job interviewing</DialogTitle>
      <DialogDescription>
        <form onSubmit={onSubmit}>
        <div>
          <h2>Add details about your job position/role, Job Desc and years of exp</h2>
        </div>
        <div className='mt-7 my-3'>
          <label>Job Role/Job Position</label>
          <Input placeholder="Ex. Full Stack Developer" required onChange={(e)=>{setJobPosition(e.target.value)}}/>
        </div>
        <div className='my-3'>
          <label>Job Description</label>
          <Textarea placeholder="Ex. ReactJS, Angular, NodeJS, MySQL, etc" required onChange={(e)=>{setJobDesc(e.target.value)}}/>
        </div>
        <div className='my-3'>
          <label>Years of experience</label>
          <Input placeholder="Ex. 5" type='number' max='50' required onChange={(e)=>{setJobExp(e.target.value)}}/>
        </div>
        <div className='flex gap-5 justify-end'>
        <Button type='button' variant="ghost" onClick={()=>setOpenDailog(false)}>Cancel</Button>
        <Button type='submit' disabled={loading}>{loading?<><LoaderCircle className='animate-spin'/>'Generating from AI'</>:'Start Interview'}</Button>
      </div>
      </form>
      </DialogDescription>
      
    </DialogHeader>
  </DialogContent>
</Dialog>

    </div>
  )
}

export default AddNewInterview