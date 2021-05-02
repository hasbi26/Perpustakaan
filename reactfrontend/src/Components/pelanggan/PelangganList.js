import React, { Component } from "react";
import { Table } from "reactstrap";
import NewPelangganModal from "./NewPelangganModal";

import ConfirmRemovalModal from "./ConfirmRemovalModal";

class PelangganList extends Component {
  render() {
    const students = this.props.students;
    return (
      <Table dark>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Document</th>
            <th>Phone</th>
            <th>Registration</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {!students || students.length <= 0 ? (
            <tr>
              <td colSpan="6" align="center">
                <b>Belum Ada Data Pelanggan</b>
              </td>
            </tr>
          ) : (
            students.map(student => (
              <tr key={student.pk}>
                <td>{student.namapelanggan}</td>
                <td>{student.email}</td>
                <td>{student.alamat}</td>
                <td>{student.telepon}</td>
                <td>{student.registrationDate}</td>
                <td align="center">
                  <NewPelangganModal
                    create={false}
                    student={student}
                    resetState={this.props.resetState}
                  />
                  &nbsp;&nbsp;
                  <ConfirmRemovalModal
                    pk={student.pk}
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

export default PelangganList;