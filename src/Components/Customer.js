import React from 'react';


class Customer extends React.Component{
    render(){
        return (
            <div>
                <ul>
                    <li>{this.props.id}</li>
                    <li>{this.props.name}</li>
                    <li></li>
                </ul>
            </div>
        );
    }
}

export default Customer;