import React from 'react';
import { render, cleanup } from '@testing-library/react';
import App from '../App';

global.fetch = require('jest-fetch-mock');

afterEach(() => {
  cleanup();
});

console.warn = jest.fn();

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
  const person = await fetch.mockResponseOnce(JSON.stringify(people));

  const { debug, getByTestId } = render(
    <App people={person} email={person.email_address} />
  );
  expect(console.warn).toHaveBeenCalledTimes(2);
  expect(getByTestId('nav-people').textContent).toBe('People');
  expect(getByTestId('nav-frequency').textContent).toBe('Frequency');
});
