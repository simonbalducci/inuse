import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

class UserList extends Component {
  constructor() {
    super();
    this.state = {
      login: null,
      avatar_url: null,
      id: null,
      followers: null,
      following: null,
      created_at: null
    };
  }

  getUser(login) {
    return fetch(`https://api.github.com/users/${login}`)
      .then(response => response.json())
      .then(response => {
        return response;
      });
  }

  async handleSubmit(event) {
    event.preventDefault();
    let user = await this.getUser(this.refs.login.value);
    this.setState({ login: user.login,
        avatar_url: user.avatar_url,
        created_at: user.created_at,
        followers: user.followers,
        following: user.following,
        id: user.id
     });
  }

  render() {
    let user;
    if (this.state.login) {
      user = (
        <Row>
          <Col md={2}>
            <img src={this.state.avatar_url} alt="" width="150" height="150" />
          </Col>
          <Col md={10}>
            <p>Login {this.state.login}</p>
            <p>Created At {this.state.created_at}</p>
            <p>Id {this.state.id}</p>
            <p>Followers {this.state.followers}</p>
            <p>Following {this.state.following}</p>
          </Col>
        </Row>
      );
    }
    return (
      <Container fluid>
        <Row className="justify-content-md-center">
          <Col md={2}>
            <form>
              <h2>UserList</h2>
              <input
                type="text"
                placeholder="Search GitHub Username"
                ref="login"
                onChange={event => this.handleSubmit(event)}
              />
            </form>
          </Col>
          <Col md={10}>
            <h2>UserDetail</h2>
            {user}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default UserList;
