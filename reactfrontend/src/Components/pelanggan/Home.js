import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import PelangganList from "./PelangganList";
import NewPelangganModal from "./NewPelangganModal";

import axios from "axios";

import { API_URL } from "../../constants/pelanggan";

class Home extends Component {
  state = {
    students: []
  };

  componentDidMount() {
    this.resetState();
  }

  getStudents = () => {
    axios.get(API_URL).then(res => this.setState({ students: res.data }));
  };

  resetState = () => {
    this.getStudents();
  };

  render() {
    return (
      <Container style={{ marginTop: "20px" }}>
        <Row>
          <Col>
            <PelangganList
              students={this.state.students}
              resetState={this.resetState}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <NewPelangganModal create={true} resetState={this.resetState} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;