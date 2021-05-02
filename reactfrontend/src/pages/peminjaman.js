import React, { Component, Fragment } from "react";
import Header from "../Components/peminjaman/Header";
import Home from "../Components/peminjaman/Home";
class Peminjaman extends Component {
	render() {
	  return (
		<Fragment>
		  <Header />
		  <Home />
		</Fragment>
	  );
	}
  }

export default Peminjaman;
