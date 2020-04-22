import React from 'react';
import {Button} from '@material-ui/core';
import {MuiThemeProvider} from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Header from './Header';
const Confirm = props => {
  const {firstname, lastname, occupation, email} = props.values;
  return (
    <MuiThemeProvider>
      <div>
        <Header title='Please confirm your information' />
        <div className='form'>
          <List>
            <ListItem>
              <strong>First Name: </strong> {firstname}
            </ListItem>
            <ListItem>
              <strong>Last Name: </strong> {lastname}
            </ListItem>
            <ListItem>
              <strong>Occupation: </strong> {occupation}
            </ListItem>
            <ListItem>
              <strong>Email: </strong> {email}
            </ListItem>
          </List>

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

export default Confirm;
