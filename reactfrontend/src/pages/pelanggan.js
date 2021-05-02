import React, { Component, Fragment } from "react";

import Header from "../Components/pelanggan/Header";
import Home from "../Components/pelanggan/Home";

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
