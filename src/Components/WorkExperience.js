import React,{useState} from 'react';
import {Button,TextField} from '@material-ui/core';

const WorkExpirience = ({ExperienceInputFields,setExperienceInputFields}) => {
  const hanndleChangeInput =(index,event) =>
  {
    event.preventDefault();
    const values=[...ExperienceInputFields];
    values[index][event.target.name]=[event.target.value];
    setExperienceInputFields(values)
  };

  const handleAddField = () => {
    setExperienceInputFields([...ExperienceInputFields, {expirience:'', company:'',
                startDate:'',endDate:''}])
  };

  const handleRemoveField = (index) => {
    const values=[...ExperienceInputFields];
    values.splice(index,1);
    setExperienceInputFields(values);
  };
  return (
   
      <form>
        { ExperienceInputFields.map( (values,index)=>(
              <div key={index} className="main">
                  <TextField name='expirience'
                    label="Experience"
                    variant='outlined'
                    value={values.expirience}
                    onChange={event => hanndleChangeInput(index,event)}
                  />

                  <TextField name='company'
                    label="Company"
                    variant='outlined'
                    value={values.company}
                    onChange={event => hanndleChangeInput(index,event)}
                  />

                  
                  <TextField name='startDate'
                    label="StartDate"
                    variant='outlined'
                    value={values.startDate}
                    onChange={event => hanndleChangeInput(index,event)}
                  />

                  <TextField name='endDate'
                    label="EndDate"
                    variant='outlined'
                    value={values.endDate}
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

export default WorkExpirience;