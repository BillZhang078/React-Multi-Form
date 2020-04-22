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
          <TextField
            id='standard-basic'
            label='Gender'
            defaultValue={props.gender}
            onChange={props.handleChange('gender')}
          />
          <TextField
            id='standard-basic'
            label='Age'
            defaultValue={props.age}
            onChange={props.handleChange('age')}
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
