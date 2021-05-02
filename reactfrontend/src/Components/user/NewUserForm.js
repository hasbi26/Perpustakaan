import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import axios from "axios";
import { API_URL } from "../../constants/user";

class NewUserForm extends React.Component {
  state = {
    pk: 0,
    username: "",
    email: "",
    password: "",
  };

  componentDidMount() {
    if (this.props.user) {
      const { pk,name, username, email, password } = this.props.user;
      this.setState({ pk,name ,username,  email, password});
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createUser = e => {
    e.preventDefault();
    axios.post(API_URL, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  editUser = e => {
    e.preventDefault();
    axios.put(API_URL + this.state.pk, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  defaultIfEmpty = value => {

    return value === "" ? "" : value;
  };

  render() {
    return (
      <Form onSubmit={this.props.user ? this.editUser : this.createUser}>
        <FormGroup>
          <Label for="username">UserName:</Label>
          <Input
            type="text"
            name="username"
            onChange={this.onChange}
            defaultvalue={this.defaultIfEmpty(this.state.username)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email:</Label>
          <Input
            type="email"
            name="email"
            onChange={this.onChange}
            defaultvalue={this.defaultIfEmpty(this.state.email)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password:</Label>
          <Input
            type="password"
            name="password"
            onChange={this.onChange}
            defaultvalue={this.defaultIfEmpty(this.state.password)}
          />
        </FormGroup>
        <Button>Send</Button>
      </Form>
    );
  }
}

export default NewUserForm;
