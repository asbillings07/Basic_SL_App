import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Config from './Config';
import People from './Components/People';
import './App.css';

const App = () => {
  // const [data, setData] = useState([]);
  // const [people, setPeople] = useState([]);

  // useEffect(() => {
  //   function fetchData() {
  //     axios.get(`${Config.apiBaseURL}`).then(res => {
  //       setData(res);
  //       console.log(data);
  //     });
  //   }

  //   fetchData();
  // });

  return <People />;
};

export default App;
