import React from 'react';
import UserDelete from './UserDelete';
import UserUpdateBtn from './UserUpdateBtn';

class UserList extends React.Component {
    constructor() {
        super();
        this.state = {
            users:[],
            update:false
        }
    }

    handleUpdate = (e) => {
        this.getUsers();
    }

    getUsers = (e) => {
        fetch("http://localhost:3000/users")
            .then(results =>{
                return results.json();
            })
            .then(users => {
                let userList = users.data.map(user => {
                    return (
                        <tr key={user.id}>
                            <td><b>{user.id}</b></td>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.email}</td>
                            <td>
                                <UserDelete mount={this.handleUpdate} userId={user.id}/>
                                &nbsp;
                                <UserUpdateBtn userId={user.id}/>
                            </td>
                        </tr>
                    );
                });
                this.setState({
                    users: userList
                });
            })
    }

    componentWillMount() {
        this.getUsers();
    }


    render() {
        return(
            <>
                <div className="container">
                    <h1>Users:</h1>
                    <div className="table-responsive">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">#ID</th>
                                    <th scope="col">First</th>
                                    <th scope="col">Last</th>
                                    <th scope="col">E-mail</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                { this.state.users }
                            </tbody>
                        </table>
                    </div>
                </div>
            </>
        );
    }
}

export default UserList;