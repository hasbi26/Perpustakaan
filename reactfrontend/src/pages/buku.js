import React, { Component, Fragment } from "react";
import Header from "../Components/buku/Header";
import Home from "../Components/buku/Home";
class Buku extends Component {
	render() {
	  return (
		<Fragment>
		  <Header />
		  <Home />
		</Fragment>
	  );
	}
  }

export default Buku;
