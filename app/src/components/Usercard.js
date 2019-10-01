import React, {Component} from 'react'; 

export default class UserCard extends Component{

  render(){
    const{name, location} = this.props.data;

    return(
      <div>
        <h1>{name}</h1>
        <h1>{location}</h1>
      </div>

    )

  }
}