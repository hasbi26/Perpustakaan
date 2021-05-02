import React, { Component } from "react";
import { Table } from "reactstrap";
import NewBukuModal from "./NewBukuModal";

import ConfirmRemovalModal from "./ConfirmRemovalModal";

class BukuList extends Component {
  render() {
    const buku = this.props.buku;
    return (
      <Table dark>
        <thead>
          <tr>
            <th>Judul Buku</th>
            <th>Kategori</th>
            <th>Penerbit</th>
            <th>Pengarang</th>
            <th>Lokasi Rak</th>
            <th>Registration</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {!buku || buku.length <= 0 ? (
            <tr>
              <td colSpan="6" align="center">
                <b>Belum Ada Data Buku</b>
              </td>
            </tr>
          ) : (
            buku.map(buku => (
              <tr key={buku.pk}>
                <td>{buku.judulbuku}</td>
                <td>{buku.kategori}</td>
                <td>{buku.penerbit}</td>
                <td>{buku.pengarang}</td>
                <td>{buku.lokasirak}</td>
                <td>{buku.registrationDate}</td>
                <td align="center">
                  <NewBukuModal
                    create={false}
                    buku={buku}
                    resetState={this.props.resetState}
                  />
                  &nbsp;&nbsp;
                  <ConfirmRemovalModal
                    pk={buku.pk}
                    resetState={this.props.resetState}
                  />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    );
  }
}

export default BukuList;