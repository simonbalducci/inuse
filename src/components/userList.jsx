import React, { Component } from "react";
import users from "../data/user.json";

class UserList extends Component {
    state = {
        users: users
      }

    render() { 
        return ( <div>
            <form>
                <input
                type="text"
                placeholder="Enter a username"
                ref="login"
                />
            </form>
            <ul>
                {this.state.users.items.map((user, i) => (
                <li key={i}>{user.login}</li>
                ))}
            </ul>
            </div> );
    }
}
 
export default UserList;