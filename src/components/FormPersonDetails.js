import React from 'react';
import {TextField} from '@material-ui/core';
import {Button} from '@material-ui/core';
import {MuiThemeProvider} from '@material-ui/core';
import Header from './Header';
const FormPersonDetail = props => {
  return (
    <MuiThemeProvider>
      <div>
        <Header title='Enter Personal Detail' />
        <div className='form'>
          <TextField
            id='standard-basic'
            label='Occupation'
            defaultValue={props.occupation}
            onChange={props.handleChange('occupation')}
          />
          <TextField
            id='standard-basic'
            label='Email'
            defaultValue={props.email}
            onChange={props.handleChange('email')}
          />

          <div className='btn-container'>
            <Button
              className='btn'
              variant='contained'
              color='primary'
              onClick={props.prevStep}>
              Back
            </Button>
            <Button
              className='btn'
              variant='contained'
              color='primary'
              onClick={props.addStep}>
              Continue
            </Button>
          </div>
        </div>
      </div>
    </MuiThemeProvider>
  );
};

export default FormPersonDetail;
