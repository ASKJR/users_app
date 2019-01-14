import React from 'react';
import { Redirect } from 'react-router-dom';


class UserUpdateBtn extends React.Component {
    constructor() {
        super();
        this.state = {redirect:false}
    }

    handleClick = (e) => {
        this.setState({
            redirect:true
        })
    }

    render() {
        const { redirect } = this.state;

        if (redirect) {
            const { userId } = this.props;
            const url = `user/update/${userId}`;
            return <Redirect to={url} />
        }
        return(
            
            <a href="" className="btn" onClick={this.handleClick}> <i className="fas fa-user-edit" title="Edit"></i> </a>
            
        );
    }
}

// const updateBtn = () => {
//     return(
//         <button>
//             <i className="fas fa-user-edit" title="Edit"></i>
//         </button>
//     );
    
// }
export default UserUpdateBtn;