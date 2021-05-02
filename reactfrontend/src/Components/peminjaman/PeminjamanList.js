import React, { Component } from "react";
import { Table } from "reactstrap";
import NewPeminjamanModal from "./NewPeminjamanModal";

import ConfirmRemovalModal from "./ConfirmRemovalModal";

class PeminjamanList extends Component {
  render() {
    const peminjaman = this.props.peminjaman;
    return (
      <Table dark>
        <thead>
          <tr>
            <th>Tanggal Peminjaman</th>
            <th>Tanggal Pengembalian</th>
            <th>id buku</th>
            <th>id user</th>
            <th>id pelanggan</th>
            <th>Registration</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {!peminjaman || peminjaman.length <= 0 ? (
            <tr>
              <td colSpan="6" align="center">
                <b>Belum Ada Data Peminjaman</b>
              </td>
            </tr>
          ) : (
            peminjaman.map(peminjaman => (
              <tr key={peminjaman.pk}>
                <td>{peminjaman.tanggalpinjam}</td>
                <td>{peminjaman.tanggalpengembalian}</td>
                <td>{peminjaman.id_buku}</td>
                <td>{peminjaman.id_user}</td>
                <td>{peminjaman.id_pelanggan}</td>
                <td>{peminjaman.registrationDate}</td>
                <td align="center">
                  <NewPeminjamanModal
                    create={false}
                    peminjaman={peminjaman}
                    resetState={this.props.resetState}
                  />
                  &nbsp;&nbsp;
                  <ConfirmRemovalModal
                    pk={peminjaman.pk}
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

export default PeminjamanList;