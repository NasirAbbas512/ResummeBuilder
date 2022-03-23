import React,{useState} from 'react';
import {Button,TextField} from '@material-ui/core';

const Education = ({EduInputFields,setEduInputFields}) => {
  const hanndleChangeInput =(index,event) =>
  {
    event.preventDefault();
    const values=[...EduInputFields];
    values[index][event.target.name]=[event.target.value];
    setEduInputFields(values)
  };

  const handleAddField = () => {
    setEduInputFields([...EduInputFields, {degree:'', institute:''}])
  };

  const handleRemoveField = (index) => {
    const values=[...EduInputFields];
    values.splice(index,1);
    setEduInputFields(values);
  };

  return (
   
      <form>
        { EduInputFields.map( (values,index)=>(
              <div key={index} className="main">
                    <TextField name='degree'
                      label="degree"
                      variant='outlined'
                      value={values.degree}
                      onChange={event => hanndleChangeInput(index,event)}
                    />

                    <TextField name='institute'
                      label="institute"
                      variant='outlined'
                      value={values.institute}
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

export default Education;