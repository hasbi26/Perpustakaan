import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import KategoriList from "./KategoriList";
import NewKategoriModal from "./NewKategoriModal";

import axios from "axios";

// import { API_URL } from "./constants";
import { API_URL } from "../../constants/kategori";

class Home extends Component {
  state = {
    kategori: []
  };

  componentDidMount() {
    this.resetState();
  }

  getKategori = () => {
    axios.get(API_URL).then(res => this.setState({ kategori: res.data }));
  };

  resetState = () => {
    this.getKategori();
  };

  render() {
    return (
      <Container style={{ marginTop: "20px" }}>
        <Row>
          <Col>
            <KategoriList
              kategori={this.state.kategori}
              resetState={this.resetState}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <NewKategoriModal create={true} resetState={this.resetState} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
