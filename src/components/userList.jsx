import React, { Component } from "react";
import users from "../data/user.json";
import { Container, Row, Col } from "react-bootstrap";

function searchingFor(search) {
  return function(x) {
    return x.login.toLowerCase().includes(search.toLowerCase()) || !search;
  };
}

class UserList extends Component {
  constructor() {
    super();
    this.state = {
      users: users,
      search: ""
    };
  }

  searchUser = event => {
    this.setState({ search: event.target.value });
  };

  renderUser() {
    if (this.state.search === '') return null;
    return (
      <ul>
        {this.state.users.items
          .filter(searchingFor(this.state.search))
          .map((userDetail, i) => (
            <div key={i}>
              <h3>{userDetail.login}</h3>
              <img src={userDetail.avatar_url} alt="" />
            </div>
          ))}
      </ul>
    );
  }

  render() {
    console.log("props", this.props);
    return (
      <Container fluid>
        <Row className="justify-content-md-center">
          <Col md={2}>
            <form>
              <h2>UserList</h2>
              <input
                type="text"
                placeholder="Enter a username"
                ref="login"
                onChange={this.searchUser}
              />
            </form>
            <ul>
              {this.state.users.items.map((user, i) => (
                <li key={i}>{user.login}</li>
              ))}
            </ul>
          </Col>
          <Col md={10}>
            <h2>UserDetail</h2>
            {this.renderUser()}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default UserList;
