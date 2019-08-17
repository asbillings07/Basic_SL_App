import React, { Component } from 'react';
import People from './Components/People';
import Navigator from './Components/Navigator';
import axios from 'axios';
import Config from './Config';
import Frequency from './Components/Frequency';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

export default class App extends Component {
  state = {
    people: [],
    email: [],
  };

  componentDidMount() {
    this.goGetPeople();
  }

  goGetPeople = async () => {
    const res = await axios.get(`${Config.apiBaseURL}`);
    const people = res.data.data;
    this.setState({
      people,
      email: people.map(person => person.email_address),
    });
    console.log(this.state.people);
  };

  render() {
    return (
      <Router>
        <Navigator />
        <Swtich>
          <Route
            exact
            path="/"
            component={() => <People people={this.state.people} />}
          />
          <Router
            path="/frequency"
            component={() => <Frequency email={this.state.email} />}
          />
        </Swtich>
      </Router>
    );
  }
}
