import React from 'react';


class Customer extends React.Component{
    render(){
        return (
            <div className='userBox'>
                <CustomerDefault id={this.props.id} name={this.props.name} img={this.props.img} />
                <CustomerInfo birthday={this.props.birthday} gender={this.props.gender} job={this.props.job} ></CustomerInfo>
            </div>
        );
    }
}

class CustomerDefault extends React.Component{
    render(){
        return(
            <div className='default'>
                <ul>
                    <li>{this.props.id}</li>
                    <li><img src={this.props.img} alt={this.props.name + ' 사진'} /></li>
                    <li>{this.props.name} 입니다</li>
                </ul>
            </div>
        )
    }
}

class CustomerInfo extends React.Component{
    render(){
        return (
            <div className='info'>
                <ul>
                    <li>{this.props.birthday}</li>
                    <li>{this.props.gender}</li>
                    <li>{this.props.job}</li>
                </ul>
            </div>
        )
    }
}

export default Customer;