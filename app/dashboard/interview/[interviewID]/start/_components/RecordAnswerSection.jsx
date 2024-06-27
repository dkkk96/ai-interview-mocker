
"use client"
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Webcam from 'react-webcam'
import useSpeechToText from 'react-hook-speech-to-text';
import { Mic } from 'lucide-react';
import { toast } from 'sonner';
import { chatSession} from '@/utils/GeminiAIModel';
import { db } from '@/utils/db';
import { useUser } from '@clerk/nextjs';
import moment from 'moment';
import { UserAnswer } from '@/utils/schema';

function RecordAnswerSection({mockInterviewQuestion,activeQuestionIndex, interviewData}) {
  const [userAnswer,setUserAnswer] = useState('');
  const {user} = useUser();
  const [loading,setLoading] = useState(false);




  const {
    error,
    interimResult,
    isRecording,
    results,
    startSpeechToText,
    stopSpeechToText,
    setResults
  } = useSpeechToText({
    continuous: true,
    useLegacyResults: false
  });

  useEffect(()=>{
    results.map((result)=>(
      setUserAnswer(prevAns => prevAns + result.transcript)
    ))
  },[results])

  const StartStopRecording =  async()=>
    {
      if(isRecording)
        {
          
          stopSpeechToText();
          

            
        }
        else{
          startSpeechToText();
        }
    }

  const UpdatedUserAnswer = async()=>{
    setLoading(true);
    const feedbackPrompt = "Question:"+mockInterviewQuestion[activeQuestionIndex]?.question+", User Answer"+userAnswer+", Depends on question and user answer for given interview question please give us rating for answer and give us feedback as area of improvement if any. "+"in just 3 to 5 line to improve it in JSON format with rating and feedback field";

            const result = await chatSession.sendMessage(feedbackPrompt);
           // console.log("This is result", result);
            const mockJSONResp = (result.response.text()).replace('```json','').replace('```','');
            //console.log(mockJSONResp);
            const JsonFeedbackResp = JSON.parse(mockJSONResp);
           // console.log("jsonmockResp",JsonFeedbackResp);
           // console.log("This is mockID",interviewData?.mockId);
            const resp = await db.insert(UserAnswer).values({
                mockIdRef : interviewData?.mockId,
                question : mockInterviewQuestion[activeQuestionIndex]?.question,
                correctAns: mockInterviewQuestion[activeQuestionIndex]?.answer,
                userAns : userAnswer,
                feedback :JsonFeedbackResp?.feedback,
                rating  : JsonFeedbackResp?.rating,
                userEmail: user?.primaryEmailAddress.emailAddress,
                createdAt : moment().format('DD-MM-YYYY')
              }
            )
            //console.log("This is the resp from db",resp);
            if(resp)
              {
                toast('User Answer Recorded Successfully...')
                setUserAnswer('');
                setResults([]);
              }
              setResults([]);
              
              setLoading(false);
              
  }

  useEffect(()=>{
    if(!isRecording&&userAnswer.length>10)
      {
        UpdatedUserAnswer();
      }
      // if(userAnswer?.length < 10)
      //   {
      //     setLoading(false);
      //     toast('Error while saving your answer please record again');
      //     return;
      //   }
  },[userAnswer])

  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='flex flex-col justify-center items-center bg-black rounded-lg mt-20 p-5'>
      <Image className='absolute bg-opacity-100' src={'/webcam.png'} width={200} height={200}/>
      <Webcam mirrored={true} style={{
        height:300,
        width:'100%',
        zIndex:10,
      }}/>
    </div>
    <Button disabled={loading} onClick={StartStopRecording} className='mt-10' variant='outline'>
      {isRecording?
      <h2 className='text-red-600 flex gap-2'>
        <Mic/> Stop Recording...
      </h2> :  'Record Answer'}
      {console.log(isRecording)}
      {console.log(userAnswer)}
    </Button>
    

    
    </div>
    
  )
}

export default RecordAnswerSection