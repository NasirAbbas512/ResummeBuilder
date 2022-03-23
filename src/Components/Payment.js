import React from 'react';
import { TextField,Select} from '@material-ui/core';

const Payment = ({values, handleChange}) => {
  return (
    <div>
      <TextField label="Mobile Number" margin='normal' variant='outlined' color='secondary'
              type="text"
              defaultValue={values.phNumber}
              onChange={handleChange("phNumber")}>
          </TextField>
    </div>
  )
}

export default Payment