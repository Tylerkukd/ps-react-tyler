import React from 'react';
import RegistrationForm from 'ps-react-tyler/RegistrationForm';

export default class ExampleRegistraionForm extends React.Component {
  onSubmit = (user) => {
    console.log(user);
  }

  render() {
    return <RegistrationForm onSubmit={this.onSubmit} />
  }
}
