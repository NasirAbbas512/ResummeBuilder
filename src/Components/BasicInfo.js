import React from 'react';
import { TextField} from '@material-ui/core';

const BasicInfo = ({values, handleChange,handleImage}) => {
  return (
    <div className='main'>
        <TextField label="first Name" margin='normal' variant='outlined' color='secondary'
              type="text"
              defaultValue={values.firstName}
              onChange={handleChange("firstName")}>
          </TextField>
        
        <TextField label="Last Name" margin='normal' variant='outlined' color='secondary'
            type="text"
            defaultValue={values.email}
            onChange={handleChange("lastName")}>
        </TextField>

          <TextField label="Email" margin='normal' variant='outlined' color='secondary'
              type="email"
              defaultValue={values.email}
              onChange={handleChange("email")}>
          </TextField>
    </div>
    
  )
}

export default BasicInfo;