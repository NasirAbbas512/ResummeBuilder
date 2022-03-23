import React,{useState} from 'react';
import {Button,TextField} from '@material-ui/core';

const PersonalProjects = ({PersonalInputFields,setPersonalInputFields}) => {
  const hanndleChangeInput =(index,event) =>
  {
    event.preventDefault();
    const values=[...PersonalInputFields];
    values[index][event.target.name]=[event.target.value];
    setPersonalInputFields(values)
  };

  const handleAddField = () => {
    setPersonalInputFields([...PersonalInputFields, {project:'', startDate:''}])
  };

  const handleRemoveField = (index) => {
    const values=[...PersonalInputFields];
    values.splice(index,1);
    setPersonalInputFields(values);
  };

  return (
   
      <form>
        { PersonalInputFields.map( (values,index)=>(
              <div key={index} className="main">
                  <TextField name='project'
                    label="Project Title"
                    variant='outlined'
                    value={values.project}
                    onChange={event => hanndleChangeInput(index,event)}
                  />

                  <TextField name='startDate'
                    label="Start Date"
                    variant='outlined'
                    value={values.startDate}
                    onChange={event => hanndleChangeInput(index,event)}
                  />

                  <Button onClick={handleAddField} variant="contained" color='primary'>Add More</Button>
                  <Button onClick={handleRemoveField} variant="contained" color='inherit'>Delete</Button>
              </div>
              
        ))
        }
      </form>
  )
  
}

export default PersonalProjects;