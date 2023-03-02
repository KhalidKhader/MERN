import React from 'react';
import { Link } from 'react-router-dom';

export default function (props) {

  return (
    <div className='PollComp'>

         <div className='pollleft'>
          <img width='130px' height='100px' src='https://th.bing.com/th/id/R.94a685e376fec3135a6366360fcc7328?rik=brx%2b5FQwI6oA%2fA&pid=ImgRaw&r=0' />
          </div>
          <div className='pollright'>
            <h5><Link to={`/ShowOptions/${props.id}`}>{props.question}</Link></h5>
            <h6><span>{props.op1}:{props.op1rate||0} ,</span> <span>{props.op2}:{props.op2rate||0} ,</span> {props.op3&& <span> {props.op3}:{props.op3rate||0}</span>}  {props.op4&&<span>{props.op4}:{props.op4rate||0} </span>}</h6>
            <h5>({props.time})</h5>
          </div>
        
    </div>
  )
}


{/* <PieChart className='leftChart'
data={[
  { title: props.op1, value: props.op1rate||0, color: '#E38627' },
  { title: props.op2, value: props.op2rate||0, color: '#C13C37' },
  { title: props.op3, value: props.op3rate||0, color: '#6A2135' },
  { title: props.op4, value: props.op4rate||0, color: '#6A4125' },

]}

/>; */}