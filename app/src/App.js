import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import UserCard from './components/Usercard';
import FollowerCard from './components/FollowerCard';

export default class App extends Component {

  constructor(props){
    super(props);

    this.state= {
      mountedApi: {},
      mountedApiFollowers: []
    }
  }

  componentDidMount(){
    const gitApi = `https://api.github.com/users/mpereannor`;

    const gitApiFollowers = `https://api.github.com/users/mpereannor/followers`;

    const profile = axios.get(gitApi);

    const followers = axios.get(gitApiFollowers)

    profile.then(res =>{
      this.setState({mountedApi: res.data})
        }
    )

   followers
    .then(res =>{
      console.log('read', res.data)
      this.setState({mountedApiFollowers: res.data})
    })

  }

  render(){
    return (
      <div className="App">
        <UserCard data={this.state.mountedApi}/>
        <FollowerCard followersData={this.state.mountedApiFollowers}/>
      </div>
    );
  }
}



