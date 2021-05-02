import React, { Component, Fragment } from "react";

import Header from "../Components/user/Header";
import Home from "../Components/user/Home";

class User extends Component {
	render() {
	  return (
		<Fragment>
		  <Header />
		  <Home />
		</Fragment>
	  );
	}
  }

export default User;
