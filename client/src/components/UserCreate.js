import React from 'react';
import { Redirect } from 'react-router-dom';

class UserCreate extends React.Component {

    constructor() {
        super();
        this.state = {
            redirect: false
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const data = new FormData(e.target);
        
        let user = {};

        for (let [key, value] of data.entries()) { 
            user[key] = value;
        }

        user = JSON.stringify(user);

        fetch('http://localhost:3000/users',{
            method: 'POST',
            body: user,
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            }
        })
        .then(response => {
            if (response.status !== 201) {
                console.log('not possible to create');
            } else {
                this.setState({
                    redirect:true
                })
            }
        });
    }

    render() {
        const { redirect } = this.state;
        
        if (redirect) {
            return (<Redirect to="/" />);
        }
        return(
            <div className="container">
                <h1>New User:</h1>
                <div className="col-md-6">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="firstNameLbl">First name:</label>
                            <input type="text" name="firstName" id="" className="form-control" required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastNameLbl">Last name:</label>
                            <input type="text" name="lastName" id="" className="form-control" required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="emailLbl">E-mail:</label>
                            <input type="email" name="email" id="" className="form-control" required/>
                        </div>
                        <button type="submit" className="btn btn-primary">Create</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default UserCreate;