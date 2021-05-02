import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import axios from "axios";
import { API_URL } from "../../constants/pelanggan";

class NewPelangganForm extends React.Component {
  state = {
    pk: 0,
    namapelanggan: "",
    email: "",
    alamat: "",
    telepon: ""
  };

  componentDidMount() {
    if (this.props.student) {
      const { pk, name,namapelanggan, email, alamat, telepon } = this.props.student;
      this.setState({ pk, name,namapelanggan, email, alamat, telepon });
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createStudent = e => {
    e.preventDefault();
    axios.post(API_URL, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  editStudent = e => {
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
      <Form onSubmit={this.props.student ? this.editStudent : this.createStudent}>
        <FormGroup>
          <Label for="namapelanggan">Nama Pelanggan:</Label>
          <Input
            type="text"
            name="namapelanggan"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.namapelanggan)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email:</Label>
          <Input
            type="email"
            name="email"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.email)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="alamat">Alamat:</Label>
          <Input
            type="text"
            name="alamat"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.alamat)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Telepon">Telepon:</Label>
          <Input
            type="text"
            name="telepon"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.telepon)}
          />
        </FormGroup>
        <Button>Send</Button>
      </Form>
    );
  }
}

export default NewPelangganForm;
