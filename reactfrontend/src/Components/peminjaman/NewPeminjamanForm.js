import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import axios from "axios";
import { API_URL } from "../../constants/peminjaman";

class NewPeminjamanForm extends React.Component {
  state = {
    pk: 0,
    tanggalpinjam: "",
    tanggalpengembalian: "",
    id_buku: "",
    id_user: "",
    id_pelanggan: "",
  };

  componentDidMount() {
    if (this.props.peminjaman) {
      const { pk, name, tanggalpinjam, tanggalpengembalian, id_buku, id_user, id_pelanggan } = this.props.peminjaman;
      this.setState({ pk, name, tanggalpinjam,  tanggalpengembalian, id_buku, id_user, id_pelanggan});
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createPeminjaman = e => {
    e.preventDefault();
    axios.post(API_URL, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  editPeminjaman = e => {
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
      <Form onSubmit={this.props.peminjaman ? this.editPeminjaman : this.createPeminjaman}>
        <FormGroup>
          <Label for="tanggalpinjam">Tanggal Peminjaman:</Label>
          <Input
            type="date"
            name="tanggalpinjam"
            onChange={this.onChange}
            defaultvalue={this.defaultIfEmpty(this.state.tanggalpinjam)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="tanggalpengembalian">Tanggal Pengembalian:</Label>
          <Input
            type="date"
            name="tanggalpengembalian"
            onChange={this.onChange}
            defaultvalue={this.defaultIfEmpty(this.state.tanggalpengembalian)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="id_buku">id_buku:</Label>
          <Input
            type="text"
            name="id_buku"
            onChange={this.onChange}
            defaultvalue={this.defaultIfEmpty(this.state.id_buku)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="id_user">id_user:</Label>
          <Input
            type="text"
            name="id_user"
            onChange={this.onChange}
            defaultvalue={this.defaultIfEmpty(this.state.id_user)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="id_pelanggan">id_pelanggan:</Label>
          <Input
            type="text"
            name="id_pelanggan"
            onChange={this.onChange}
            defaultvalue={this.defaultIfEmpty(this.state.id_pelanggan)}
          />
        </FormGroup>
        <Button>Send</Button>
      </Form>
    );
  }
}

export default NewPeminjamanForm;
