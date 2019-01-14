import React from 'react';

class UserDelete extends React.Component {
    
    handleClick = (e) => {
        const { userId } = this.props;
        console.log(userId);
        fetch('http://localhost:3000/users/' + userId,{
            method:'DELETE'
        })
        .then(data => {
            if (data.status !== 200) {
                console.log('impossible to delete');
            } 
            this.props.mount();
            
        })
    }
    render() {
        const color = {
            color: 'red'
        }
        return(
            <>
                <button onClick={this.handleClick} title="Delete">
                    <i className="fas fa-minus-circle" style={color}></i>
                </button>
            </>
        );
    }
}

export default UserDelete;