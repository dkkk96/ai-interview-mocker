import { Lightbulb, Volume2 } from "lucide-react";
import React from "react";

function QuestionsSection({ mockInterviewQuestion, activeQuestionIndex }) {
  const speechToText = (text) => {
    if ("speechSynthesis" in window) {
      const speech = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(speech);
    } else {
      alert("Sorry your browser doesn't support speech to text");
    }
  };
  return (
    mockInterviewQuestion && (
      <div className="p-5 border rounded-lg my-10">
        {console.log(activeQuestionIndex)}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {mockInterviewQuestion &&
            mockInterviewQuestion.map((question, index) => (
              <h2
                key={index}
                className={`p-2 bg-primary text-gray-500 rounded-full text-xs md:text-sm text-center cursor-pointer ${
                  activeQuestionIndex == index && " text-white scale-110 shadow-lg shadow-indigo-500/50 transition-all"
                } `}
              >
                Question #{index + 1}
              </h2>
            ))}
        </div>
        <h2 className="my-5 text-md md:text-lg">
          {mockInterviewQuestion[activeQuestionIndex]?.question}
        </h2>
        <Volume2
          className="cursor-pointer"
          onClick={() =>
            speechToText(mockInterviewQuestion[activeQuestionIndex]?.question)
          }
        />
        <div className="border rounded-lg p5 bg-blue-100 p-4 mt-20">
          <h2 className="flex gap-2 item-centre text-blue-800 ">
            <Lightbulb />
            <strong>Note:</strong>
            <strong className="text-sm text-blue-800">
              Ready to ace your interview? Press the record button to start
              recording your answer. Click the speaker icon to listen to the
              question before responding. Practice makes perfect! Boost your
              interview skills with our user-friendly tools.
            </strong>
          </h2>
        </div>
      </div>
    )
  );
}

export default QuestionsSection;
