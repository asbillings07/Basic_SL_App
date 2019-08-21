import React from 'react';
import { render, cleanup } from '@testing-library/react';
import App from '../App';

global.fetch = require('jest-fetch-mock');

afterEach(() => {
  cleanup();
});

const people = [
  {
    id: '1234',
    display_name: 'Aaron',
    title: 'Full Stack Developer',
    email_address: 'aaron@test.com',
  },
  {
    id: '4321',
    display_name: 'Ted',
    title: 'Front End Developer',
    email_address: 'ted@test.com',
  },
  {
    id: '7890',
    display_name: 'William',
    title: 'Front End Developer',
    email_address: 'will@test.com',
  },
];

test('<App />', async () => {
  fetch.mockResponseOnce(JSON.stringify(people));

  const { debug } = render(<App />);
});
