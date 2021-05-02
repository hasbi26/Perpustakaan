import React, { Component } from "react";
import { Table } from "reactstrap";
import NewKategoriModal from "./NewKategoriModal";

import ConfirmRemovalModal from "./ConfirmRemovalModal";

class KategoriList extends Component {
  render() {
    const kategori = this.props.kategori;
    return (
      <Table dark>
        <thead>
          <tr>
            <th>Kategori</th>
            <th>Registration</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {!kategori || kategori.length <= 0 ? (
            <tr>
              <td colSpan="6" align="center">
                <b>Belum Ada Data Kategori Buku</b>
              </td>
            </tr>
          ) : (
            kategori.map(kategori => (
              <tr key={kategori.pk}>
                <td>{kategori.kategori}</td>
                <td>{kategori.registrationDate}</td>
                <td align="center">
                  <NewKategoriModal
                    create={false}
                    kategori={kategori}
                    resetState={this.props.resetState}
                  />
                  &nbsp;&nbsp;
                  <ConfirmRemovalModal
                    pk={kategori.pk}
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

export default KategoriList;
