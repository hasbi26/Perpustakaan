import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import axios from "axios";
import { API_URL } from "../../constants/kategori";

class NewKategoribukuForm extends React.Component {
  state = {
    pk: 0,
    kategori: ""
  };

  componentDidMount() {
    if (this.props.kategori) {
      const { pk, kategori } = this.props.kategori;
      this.setState({ pk,kategori });
    }
  }

  onChange = e => {
  //  this.setState({ [e.target.kategori]: e.target.value });
  this.setState ({ kategori: e.target.value });
  };

  createKategori = e => {
    e.preventDefault();
    axios.post(API_URL, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  editKategori = e => {
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
      <Form onSubmit={this.props.kategori ? this.editKategori : this.createKategori}>
        <FormGroup>
          <Label for="kategori">Kategori:</Label>
          <Input
            type="text"
            name="kategori"
            defaultValue={this.defaultIfEmpty(this.state.kategori)}
            onChange={this.onChange}
          />
        </FormGroup>
        <Button>Send</Button>
      </Form>
    );
  }
}

export default NewKategoribukuForm;

  