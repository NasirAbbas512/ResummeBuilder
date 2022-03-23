import React,{useState} from 'react';
import {Button,TextField} from '@material-ui/core';

const Interest = ({interestInputFields,setInterestInputFields}) => {
  const hanndleChangeInput =(index,event) =>
  {
    event.preventDefault();
    const values=[...interestInputFields];
    values[index][event.target.name]=[event.target.value];
    setInterestInputFields(values)
  };

  const handleAddField = () => {
    setInterestInputFields([...interestInputFields, {interest:''}])
  };

  const handleRemoveField = (index) => {
    const values=[...interestInputFields];
    values.splice(index,1);
    setInterestInputFields(values);
  };

  return (
   
      <form>
        { interestInputFields.map( (values,index)=>(
              <div key={index} className="main">
                    <TextField name='interest'
                      label="Interest"
                      variant='outlined'
                      value={values.interest}
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

export default Interest;