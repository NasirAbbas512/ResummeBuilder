import React from 'react';
import { TextField} from '@material-ui/core';

const PersonalInfo = ({values, handleChange}) => {
  return (
    <div className='main'>
        <TextField label="Mobile Number" margin='normal' variant='outlined' color='secondary'
              type="text"
              defaultValue={values.phNumber}
              onChange={handleChange("phNumber")}>
          </TextField>
      
        <TextField label="Adress" margin='normal' variant='outlined' color='secondary'
            type="text"
            defaultValue={values.adress}
            onChange={handleChange("adress")}>
        </TextField>

          <TextField label="Country" margin='normal' variant='outlined' color='secondary'
              type="text"
              defaultValue={values.country}
              onChange={handleChange("countery")}>
          </TextField>
    </div>
  )
}

export default PersonalInfo;