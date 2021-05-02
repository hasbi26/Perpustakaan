import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import axios from "axios";
import { API_URL } from "../../constants/buku";

class NewBukuForm extends React.Component {
  state = {
    pk: 0,
    judulbuku: "",
    kategori: "",
    penerbit: "",
    pengarang: "",
    lokasirak: "",
  };

  componentDidMount() {
    if (this.props.buku) {
      const { pk, name,judulbuku, kategori, penerbit, pengarang, lokasirak } = this.props.buku;
      this.setState({ pk, name, judulbuku,  kategori, penerbit, pengarang, lokasirak});
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createBuku = e => {
    e.preventDefault();
    axios.post(API_URL, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  editBuku = e => {
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
      <Form onSubmit={this.props.buku ? this.editBuku : this.createBuku}>
        <FormGroup>
          <Label for="judulbuku">Judul Buku:</Label>
          <Input
            type="text"
            name="judulbuku"
            onChange={this.onChange}
            defaultvalue={this.defaultIfEmpty(this.state.judulbuku)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="kategori">Kategori:</Label>
          <Input
            type="text"
            name="kategori"
            onChange={this.onChange}
            defaultvalue={this.defaultIfEmpty(this.state.kategori)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="penerbit">Penerbit:</Label>
          <Input
            type="text"
            name="penerbit"
            onChange={this.onChange}
            defaultvalue={this.defaultIfEmpty(this.state.penerbit)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="pengarang">Pengarang:</Label>
          <Input
            type="text"
            name="pengarang"
            onChange={this.onChange}
            defaultvalue={this.defaultIfEmpty(this.state.pengarang)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="lokasirak">Lokasi Rak:</Label>
          <Input
            type="text"
            name="lokasirak"
            onChange={this.onChange}
            defaultvalue={this.defaultIfEmpty(this.state.lokasirak)}
          />
        </FormGroup>
        <Button>Send</Button>
      </Form>
    );
  }
}

export default NewBukuForm;
