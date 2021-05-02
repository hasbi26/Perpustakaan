import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import PeminjamanList from "./PeminjamanList";
import NewPeminjamanModal from "./NewPeminjamanModal";

import axios from "axios";

import { API_URL } from "../../constants/peminjaman";

class Home extends Component {
  state = {
    peminjaman: []
  };

  componentDidMount() {
    this.resetState();
  }

  getPeminjaman = () => {
    axios.get(API_URL).then(res => this.setState({ peminjaman: res.data }));
  };

  resetState = () => {
    this.getPeminjaman();
  };

  render() {
    return (
      <Container style={{ marginTop: "20px" }}>
        <Row>
          <Col>
            <PeminjamanList
              peminjaman={this.state.peminjaman}
              resetState={this.resetState}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <NewPeminjamanModal create={true} resetState={this.resetState} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;