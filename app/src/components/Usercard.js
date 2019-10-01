import React, {Component} from 'react'; 
import styled from 'styled-components';

const ProfileDesign = styled.div`
  
    background: linear-gradient(to right, #240b36, #c31432);
    
    img{
      width: 100px;
    },

    h1{
      color: pink;
        &:hover{
          color: lime;
             opacity: 0.7;
         }
     }
`
export default class UserCard extends Component{

  render(){
    const{name, location, avatar_url, bio} = this.props.data;
    
    return(
      <ProfileDesign>
        <img src={avatar_url}/>
        <h1>{name}</h1>
      </ProfileDesign>
    )
  }
}