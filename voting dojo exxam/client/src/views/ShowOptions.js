import React from 'react'
import  { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import OptionComp from '../components/OptionComp';

export default function ShowOptions() {
    const { id } = useParams();
    const [option, setOption] = useState([]);

    // const [op1val,setOp1val]=useState(Number);
    // const [op2val,setOp2val]=useState(Number);
    // const [op3val,setOp3val]=useState(Number);
    // const [op4val,setOp4val]=useState(Number);

    let history=useNavigate();
    useEffect(() => {
        axios.get('http://localhost:8000/api/Vote/' + id)
            .then(res => {
                setOption(res.data);
                setOption1Rate(res.data.option1Rate||0);
                setOption2Rate(res.data.option2Rate||0);
                setOption3Rate(res.data.option3Rate||0);
                setOption4Rate(res.data.option4Rate||0);

                //console.log(res.data)
            })
    }, []);

   

    let [option1Rate,setOption1Rate]=useState(0);
    let [option2Rate,setOption2Rate]=useState(0);
    let [option3Rate,setOption3Rate]=useState(0);
    let [option4Rate,setOption4Rate]=useState(0);

    const goToResults=()=>{
       history(`/VoteResults/${id}`)

    }

    const onClickOption1=async(e)=>{
        e.preventDefault();
          setOption1Rate(option1Rate+1);
        option.option1Rate=option1Rate+1;
         
        await axios.put('http://localhost:8000/api/Vote/' + id, option)
             .then(res => {
                goToResults();
            });
            
    
    }

    const onClickOption2=async(e)=>{
        e.preventDefault();
          setOption1Rate(option2Rate+1);
        option.option2Rate=option2Rate+1;
         
        await axios.put('http://localhost:8000/api/Vote/' + id, option)
             .then(res => {
                goToResults();
            });

    }

    const onClickOption3=async(e)=>{
        e.preventDefault();
          setOption3Rate(option3Rate+1);
        option.option3Rate=option3Rate+1;
         
        await axios.put('http://localhost:8000/api/Vote/' + id, option)
             .then(res => {
                goToResults();
            });
            
    
    }

    const onClickOption4=async(e)=>{
        e.preventDefault();
          setOption4Rate(option4Rate+1);
        option.option4Rate=option4Rate+1;
         
        await axios.put('http://localhost:8000/api/Vote/' + id, option)
             .then(res => {
                goToResults();
            });

    }

    
   

    
    
   

               
                
            
                    
    
    // </div>
  return (

    <div className='greyOptionContainer'>
                  <h1 className='titlePoll'>{option.question}</h1>

        <div className='greyOption' >
                    <OptionComp 
                    id={option._id}
                    optionValue={option.option1}
                    className='btnOp1'
                    function={onClickOption1}
                    />
                    <OptionComp 
                    id={option._id}
                    optionValue={option.option2}
                    className='btnOp2'
                    function={onClickOption2}
                    />
                  { option.option3&& <OptionComp 
                    id={option._id}
                    optionValue={option.option3}
                    className='btnOp3'
                    function={onClickOption3}
                    />}
                    {option.option4&&<OptionComp 
                    id={option._id}
                    optionValue={option.option4}
                    className={'btnOp4'}
                    function={onClickOption4}
                    />}
                
            
                    
    
    </div>
    </div>
)
                    
}
