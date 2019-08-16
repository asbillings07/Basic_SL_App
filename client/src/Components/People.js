import React, { Component } from 'react';
import axios from 'axios';


export default class People extends Component {
  state = {};

  componentDidMount() {
    this.goGetPeople();
  }

  goGetPeople = async () => {

    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = `https://api.salesloft.com/v2/people.json`

    const config = {
      headers: {
        'Authorization': "bearer " + process.env.REACT_APP_API_KEY
      }
    };
    try {
      const res = await axios.get(proxyurl + url, null, config);
      console.log(res);
    } catch (err) {
      console.log(err.message)
    }

  };

  render() {
    return (
      <>
        <h1>Welcome!</h1>
      </>
    );
  }
}
