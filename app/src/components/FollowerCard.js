import React, {Component} from 'react'; 
import UserCard from './Usercard';
import styled from 'styled-components';


const CardDesign = styled.div`
    display: flex;
    flex-direction: column;
    background: linear-gradient(to right, #859398, #283048); 
    img{
        width: 200px;
    }

    h2{
        color: white;
        &:hover{
            color: lime;
            opacity: 0.7;
            font-weight: bolder;
        }
    }
`
export default class FollowerCard extends Component{

    render(){
        const followersArray = this.props.followersData;
     
        return(
            <CardDesign>
                {followersArray.map(follower =>
                <div>
                    <img src={follower.avatar_url}/>
                    <h2>{follower.login}</h2>
                </div>             
                    )}
            </CardDesign>
        )
    }
}

