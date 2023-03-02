import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import ProjectStatusComponent from '../components/ProjectStatusComponent';
export default function ProjectStatus() {
    let history=useNavigate();
    const [backlog,setBacklog]=useState([]);
    const [current,setCurrent]=useState([]);
    const [inProgress,setInProgress]=useState([]);
    const [completed,setCompleted]=useState([]);
    const [ProjectDateStatus,setProjectDateStatus]=useState('backlog');
    useEffect(() => {
      axios.get('http://localhost:8000/api/Project')
          .then(res => {
            setBacklog(res.data);
            setCurrent(res.data.filter(status=>(status.ProjectDateStatus=='backlog')));
            setInProgress(res.data.filter(status=>(status.ProjectDateStatus=='inProgress')));
            setCompleted(res.data.filter(status=>(status.ProjectDateStatus=='completed')));

          });
  }, [])   
    const deleteProject = (projectId) => {
        axios.delete('http://localhost:8000/api/Project/' + projectId)
            .then(res=>{
                console.log(projectId)
                setCompleted(completed.filter(completed => completed._id  !=  projectId));
            })
    }
   const   CompletedProjects =async(projectId)=>{
    setProjectDateStatus('completed');
    await axios.put('http://localhost:8000/api/Project/' + projectId, {ProjectDateStatus:'completed'}).then(()=>
      {
        setInProgress(inProgress.filter(backlog => backlog._id  !=  projectId));
        setBacklog(backlog.filter(backlog => backlog._id  !=  projectId))
        setCompleted([...completed,inProgress.find(status=>(status._id==projectId))])
    }
    )
    }
    const InProgressProject=async(projectId)=>{
      setProjectDateStatus('inProgress');
      await axios.put('http://localhost:8000/api/Project/' + projectId,  {ProjectDateStatus:'inProgress'}).then(()=>{
        setCurrent(backlog.filter(backlog => backlog._id  !=  projectId))
      setBacklog(backlog.filter(backlog => backlog._id  !=  projectId))
      setInProgress([...inProgress,backlog.find(status=>(status._id==projectId))])
      })
      

    }
  return (
    <div>
        <table className='projecttable' >
          <thead>
          <tr>
                <th className='backlog' ><h3>Backlog</h3></th>
                <th className='inProgress' ><h3>In Progress</h3></th>
                <th className='Completed' ><h3>Completed</h3></th>
            </tr>
            </thead>
          <tbody>
          <tr>
            <td >
              <div className='newProjects'>{backlog.filter(status=>(status.ProjectDateStatus=='backlog')).map((project, idx) =>  {return <div key={idx}><ProjectStatusComponent idx={idx} projectName={project.ProjectName} projectDate={project.ProjectDate} buttonTitle={'Start Project'} buttonClass={'StartProject'} buttonFunction={()=>{InProgressProject(project._id)}} /></div>})}</div>
              </td>
               <td className='inProgressProjects'>{inProgress.map((project, idx) =>  {return <div key={idx}><ProjectStatusComponent idx={idx} projectName={project.ProjectName} projectDate={project.ProjectDate} buttonTitle={'Move to Completed'} buttonClass={'MovetoCompleted'} buttonFunction={()=>{CompletedProjects(project._id)}  } /></div>})}</td>
                <td>{completed.map((project, idx) =>  {return <div key={idx}><ProjectStatusComponent  projectName={project.ProjectName} projectDate={project.ProjectDate} buttonTitle={'Remove Project'} buttonClass={'RemoveProject'} buttonFunction={()=>{deleteProject(project._id)}} /></div>})}</td>
                </tr>
          </tbody>
          <button className='goToForm' onClick={()=>{history('/ProjectForm')}} >Add New Project</button>
        </table>
    </div>
  )
}
