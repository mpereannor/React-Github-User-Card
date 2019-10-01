import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import UserCard from './components/Usercard';

export default class App extends Component {

  constructor(props){
    super(props);

    this.state= {
      mountedApi: [],
      mountedApiFollowers: []
    }
  }

  componentDidMount(){
    const gitApi = `https://api.github.com/users/mpereannor`

    const gitApiFollowers = `https://api.github.com/users/mpereannor/followers`

    const profile = axios.get (gitApi);

    profile.then(res =>{
      this.setState({mountedApi: res.data})
        }

    )

    const followers= axios.get(gitApiFollowers);

    followers.then(res =>{this.setState({mountedApiFollowers: res.data})})

  }
  render(){
    return (
      <div className="App">
        <UserCard/>
      </div>
    );
  }
}



