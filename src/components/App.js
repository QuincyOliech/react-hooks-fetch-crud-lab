import React, { useState,useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const[data,setData] = useState([]);

  // setting effect
  useEffect(()=>{
    fetch("http://localhost:4000/questions")
    .then((response) => response.json())
    .then((data) => setData(data))
  })
  
  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm /> : <QuestionList data={data} />}
    </main>
  );
}

export default App;
