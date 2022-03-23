import React,{useState} from 'react';
import {Button,TextField} from '@material-ui/core';

const Skills = ({SkillsInputFields,setSkillsInputFields}) => {
  const hanndleChangeInput =(index,event) =>
  {
    event.preventDefault();
    const values=[...SkillsInputFields];
    values[index][event.target.name]=[event.target.value];
    setSkillsInputFields(values)
  };

  const handleAddField = () => {
    setSkillsInputFields([...SkillsInputFields, {skill:''}])
  };

  const handleRemoveField = (index) => {
    const values=[...SkillsInputFields];
    values.splice(index,1);
    setSkillsInputFields(values);
  };
  return (
   
      <form>
        { SkillsInputFields.map( (values,index)=>(
              <div key={index} className="main">
                  <TextField name='skill'
                    label="Skills"
                    variant='outlined'
                    value={values.skill}
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

export default Skills;