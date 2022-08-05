import React, { useState } from "react";
import RSVPForm from "./RSVPForm";
import './RSVP.css';
 
function RSVP(props) {
  const parentSetSubmit = props.setSubmit

  const [isSubmitted, setIsSubmitted] = useState({
    submitted: props.submitted || false,
    answer: props.answer || null,
    error: false
  });

  function setError(){
    setIsSubmitted((prevState) => {return {...prevState, error: true}});
  }

  function setSubmit(answer) {
    setIsSubmitted((prevState) => {return {...prevState, answer: answer, submitted: true}})
    parentSetSubmit(answer)  // pass up to Main.js
  }

  return (
    <div>
      {isSubmitted.error ? 
        <div className='submitted-div'>
            <p className='shake'>💥😢💥</p>
            <p>Ouch!</p>
            <p>There's been an error sending your RSVP... please try again later :(</p>
            <p>If this keeps happening contact mattgoldeck@gmail.com</p>
            <p className='shake'>💥😢💥</p>
        </div> 
        :
        (isSubmitted.submitted ? 
          <div className='submitted-div'>
            <p className='shake'>🔔🕊🔔</p>
            <p>{isSubmitted.answer ? 'Submitted! See you soon!' : 'Submitted! We\'ll miss you!'}</p>
            <p className='shake'>🔔🕊🔔</p>
          </div> 
          : 
          <RSVPForm setSubmit={setSubmit} setError={setError}/>
        )
      }
    </div>
  );
}
 
export default RSVP;