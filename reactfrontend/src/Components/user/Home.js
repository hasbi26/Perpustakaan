import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import UserList from "./UserList";
import NewUserModal from "./NewUserModal";

import axios from "axios";

import { API_URL } from "../../constants/user";

class Home extends Component {
  state = {
    user: []
  };

  componentDidMount() {
    this.resetState();
  }

  getUser = () => {
    axios.get(API_URL).then(res => this.setState({ user: res.data }));
  };

  resetState = () => {
    this.getUser();
  };

  render() {
    return (
      <Container style={{ marginTop: "20px" }}>
        <Row>
          <Col>
            <UserList
              user={this.state.user}
              resetState={this.resetState}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <NewUserModal create={true} resetState={this.resetState} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;