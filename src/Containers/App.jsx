import React, {Component} from "react";
import CardList from "../Components/CardList";
import SearchBox from "../Components/SearchBox";
import Scrool from "../Components/Scrool";
import "tachyons";


class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: ""
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ robots: users }));
  }
  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value});
  };
  render() {
    const filter =  this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    });
      return (
        <div className="tc ">
          <div className="bg-black bw2 shadow-5">
            <h1 className="f2 f1-l fw2 white mb0 lh-title">RoboFriends</h1>
            <SearchBox onChange={this.onSearchChange} />
          </div>
          <Scrool>
            <CardList robots = {filter}/>
          </Scrool>
        </div>
      
      );
  };
    } 

export default App;
