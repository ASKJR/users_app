import React from 'react';
import { Redirect } from 'react-router-dom';

class UserUpdate extends React.Component {

    constructor() {
        super();
        this.state = {id:'',firstName:'',lastName:'',email:'',error:false,updateSuccess:false}
    }

    updateUser = (e) => {
        e.preventDefault();
        const { id } = this.state;
        const data = new FormData(e.target);
        
        let user = {}
        for(let [key,value] of data.entries()) {
            user[key] = value;
        }
        user = JSON.stringify(user);

        fetch("http://localhost:3000/users/" + id,{
            method: 'PUT',
            body: user,
            headers:{
                'Content-type': 'application/json;charset=UTF-8'
            },
           
        })
        .then(results => {
            if (results.status !== 200) {
                console.log('not possible to update');
            } else {
                this.setState({
                    updateSuccess:true
                })
            }
        });
    }

    handleInput = (e) => {
        const { value } = e.target;
        const { name } = e.target;

        this.setState({
            [name]: value
        });
    }

    componentWillMount() {
        const { id } = this.props.match.params; 
        fetch("http://localhost:3000/users/" + id)
            .then(response => {
                return response.json();
            })
            .then(user => {
                if (!user.status) {
                    this.setState({
                        error:true
                    })
                } else {
                    this.setState({
                        id: user.data.id,
                        firstName: user.data.firstName,
                        lastName: user.data.lastName,
                        email: user.data.email
                    });
                }
            });
    }

    render() {
        const { error } = this.state;
        const { updateSuccess } = this.state;;
        if (error) {
            return <Redirect to="/error" />
        }

        if (updateSuccess) {
            return <Redirect to="/" />
        }

        const { firstName } = this.state;
        const { lastName } = this.state;
        const { email } = this.state;

        return(
            <div className="container">
                <h1>Update:</h1>
                <div className="col-md-6">
                    <form onSubmit={this.updateUser}>
                        <div className="form-group">
                            <label htmlFor="firstNameLbl">First name:</label>
                            <input type="text" name="firstName" id="" onChange={this.handleInput} value={firstName} className="form-control" required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastNameLbl">Last name:</label>
                            <input type="text" name="lastName" id="" onChange={this.handleInput} value={lastName} className="form-control" required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="emailLbl">E-mail:</label>
                            <input type="email" name="email" id="" onChange={this.handleInput} value={email} className="form-control" required/>
                        </div>
                        <button type="submit" className="btn btn-primary">Update</button>
                    </form>
                </div>
            </div>
        );
    }
}
export default UserUpdate;