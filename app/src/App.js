import React, {Component} from 'react';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);

    this.state= {
      mountedApi= [],
    },
  }

  componentDidMount(){
    const gitApi = `https://api.github.com/users/mpereannor`

    axios.get(gitApi)
    .then(res =>{
      this.setState({mountedApi: res.data})
        }

    )
  }
  render(){
    return (
      <div className="App">
      </div>
    );
  }
}

export default App;
