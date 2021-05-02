import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
return (
	<>
	<Nav>
		<Bars />

		<NavMenu>
		<NavLink to='/about' activeStyle>
			About
		</NavLink>
		<NavLink to='/pelanggan' activeStyle>
			Data Pelanggan
		</NavLink>
		<NavLink to='/buku' activeStyle>
			Data Buku
		</NavLink>
		<NavLink to='/kategori' activeStyle>
			Data Kategori Buku
		</NavLink>
		<NavLink to='/peminjaman' activeStyle>
			Data Transaksi Peminjaman
		</NavLink>
		<NavLink to='/user' activeStyle>
			Data User
		</NavLink>
		{/* Second Nav */}
		{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
		</NavMenu>
		<NavBtn>
		<NavBtnLink to='/Logout'>Logout</NavBtnLink>
		</NavBtn>
	</Nav>
	</>
);
};

export default Navbar;
