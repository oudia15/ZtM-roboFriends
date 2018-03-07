import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      robots: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users').then(response => {
      return response.json();
    })
    .then(users => {
      return users.map(user => {
        return {
          id: user.id,
          name: user.name,
          username: user.username,
          email: user.email
        }
      })
    })
    .then(user => {
      this.setState({ robots: user });
    })
  }

  onSearchChange = (event) => {
      this.setState({ searchfield: event.target.value });
  }

  render() {
    const {robots, searchfield} = this.state;
    const filteredRobots = robots.filter(user => {
      return user.name.toLowerCase().includes(searchfield.toLowerCase())
    })
    if(!robots.length) {
      return <h1 className='tc'> Robots loading </h1>
    } else {
      return (
        <div className='tc'>
          <h1 className='f1'> RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </div>
      );
    }
  }
}

export default App;
