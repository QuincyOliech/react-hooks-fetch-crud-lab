import React  from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({data}) {
  // map method for looping through the questions array
  const questionArray=data.map((question)=>{
    return (
          <QuestionItem key={question.id} question={question}/>
    )

  })
  
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questionArray}</ul>
    </section>
  );
}

export default QuestionList;
