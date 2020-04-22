import React, {Component} from 'react';

import FormUserDetail from './FormUserDetails';
import FormPersonDetail from './FormPersonDetails';
import Confirm from './Comfirm';
import Success from './Success';
class UserForm extends Component {
  state = {
    step: 1,
    firstname: '',
    lastname: '',
    occupation: '',
    email: ''
  };

  addStep = () => {
    this.setState({
      step: this.state.step + 1
    });
  };
  prevStep = () => {
    this.setState({
      step: this.state.step - 1
    });
  };
  handleChange = input => e => {
    this.setState({[input]: e.target.value});
  };

  render() {
    const {step, firstname, lastname, occupation, email} = this.state;
    let form;
    switch (step) {
      case 1:
        return (form = (
          <FormUserDetail
            firstname={firstname}
            lastname={lastname}
            addStep={this.addStep}
            handleChange={this.handleChange}
          />
        ));
      case 2:
        return (form = (
          <FormPersonDetail
            occupation={occupation}
            email={email}
            addStep={this.addStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
          />
        ));
      case 3:
        return (form = (
          <Confirm
            addStep={this.addStep}
            prevStep={this.prevStep}
            values={this.state}
          />
        ));
      case 4:
        return (form = <Success />);
    }
  }
}

export default UserForm;
