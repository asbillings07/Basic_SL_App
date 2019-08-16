import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Config from './Config';
import './App.css';

const App = () => {
  const [data, setData] = useState([]);
  const [people, setPeople] = useState([]);

  useEffect(() => {
    axios.get(`${Config.apiBaseURL}`).then(res => console.log(res));
  });

  return <div />;
};

export default App;
