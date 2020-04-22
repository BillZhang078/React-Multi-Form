import React from 'react';
import Header from './Header';
import {TextField} from '@material-ui/core';
import {Button} from '@material-ui/core';
import {MuiThemeProvider} from '@material-ui/core';
import '../components/form.css';

const FormUserDetail = props => {
  return (
    <MuiThemeProvider>
      <div>
        <Header title='Enter User Detail' />
        <div className='form'>
          <TextField
            id='standard-basic'
            label='First Name'
            defaultValue={props.firstname}
            onChange={props.handleChange('firstname')}
          />
          <TextField
            id='standard-basic'
            label='Last Name'
            defaultValue={props.lastname}
            onChange={props.handleChange('lastname')}
          />

          <div className='btn-container btn-user'>
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

export default FormUserDetail;
