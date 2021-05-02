import React, { Component } from "react";
import { Table } from "reactstrap";
import NewUserModal from "./NewUserModal";

import ConfirmRemovalModal from "./ConfirmRemovalModal";

class UserList extends Component {
  render() {
    const user = this.props.user;
    return (
      <Table dark>
        <thead>
          <tr>
            <th>User Name</th>
            <th>Email</th>
            <th>Registration</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {!user || user.length <= 0 ? (
            <tr>
              <td colSpan="6" align="center">
                <b>Belum Ada Data User</b>
              </td>
            </tr>
          ) : (
            user.map(user => (
              <tr key={user.pk}>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.registrationDate}</td>
                <td align="center">
                  <NewUserModal
                    create={false}
                    user={user}
                    resetState={this.props.resetState}
                  />
                  &nbsp;&nbsp;
                  <ConfirmRemovalModal
                    pk={user.pk}
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

export default UserList;