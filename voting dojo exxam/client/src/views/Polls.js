import React from 'react'
import { useState,useEffect } from 'react';
import PollComp from '../components/PollComp';
import axios from 'axios';
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'

TimeAgo.addDefaultLocale(en)
const timeAgo = new TimeAgo('en-US')

export default function () {
  const [polls, setPolls] = useState([]);
  const [topPolls, setTopPolls] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/Vote')
        .then(res =>{ 
           setPolls(res.data);
      

        });

}, [])

useEffect(() => {
  axios.get('http://localhost:8000/api/Votes/Top')
      .then(res =>{ 
        setTopPolls(res.data);
    

      });

}, [])

//(a, b) => (((a.poll.option1Rate)+(a.poll.option2Rate)+(a.poll.option3Rate)+(a.poll.option4Rate)) >((b.poll.option1Rate)+(b.poll.option2Rate)+(b.poll.option3Rate)+(b.poll.option4Rate))) ? 1 : -1


  return (
    <div className='pollVote'>
        <div className='rightpolls'>
          <h2>Recent Polls</h2>
          {polls.map((poll, idx) => {
                return (
                    <PollComp key={idx}
                    question={poll.question}
                    id={poll._id}
                    op1={poll.option1}
                    op2={poll.option2}
                    op3={poll.option3}
                    op4={poll.option4}
                    op1rate={poll.option1Rate}
                    op2rate={poll.option2Rate}
                    op3rate={poll.option3Rate}
                    op4rate={poll.option4Rate}
                    createdAt={poll.createdAt}
                    time={ timeAgo.format(new Date(poll.createdAt))}
                    
                    />
                )
            })}
            
        </div>
        <div className='leftpolls'>
        <h2>Top 3 Polls</h2>

           {topPolls.map((poll, idx) => {
                return (
                    <PollComp key={idx}
                    question={poll.question}
                    id={poll._id}
                    op1={poll.option1}
                    op2={poll.option2}
                    op3={poll.option3}
                    op4={poll.option4}
                    op1rate={poll.option1Rate}
                    op2rate={poll.option2Rate}
                    op3rate={poll.option3Rate}
                    op4rate={poll.option4Rate}
                    createdAt={poll.createdAt}
                    time={ timeAgo.format(new Date(poll.createdAt))}
                    
                    />
                )
            }).slice(0,3)}

        </div>

        
    </div>
  )
}

