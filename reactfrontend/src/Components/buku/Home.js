import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import BukuList from "./BukuList";
import NewBukuModal from "./NewBukuModal";

import axios from "axios";

import { API_URL } from "../../constants/buku";

class Home extends Component {
  state = {
    buku: []
  };

  componentDidMount() {
    this.resetState();
  }

  getBuku = () => {
    axios.get(API_URL).then(res => this.setState({ buku: res.data }));
  };

  resetState = () => {
    this.getBuku();
  };

  render() {
    return (
      <Container style={{ marginTop: "20px" }}>
        <Row>
          <Col>
            <BukuList
              buku={this.state.buku}
              resetState={this.resetState}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <NewBukuModal create={true} resetState={this.resetState} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;