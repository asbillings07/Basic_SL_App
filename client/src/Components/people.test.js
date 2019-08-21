import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import People from './People';

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

test('<People />', async () => {
  const { debug, getAllByTestId } = render(
    <MemoryRouter>
      <People people={people} />
    </MemoryRouter>
  );
  expect(getAllByTestId('personid').textContent).toBe(people.id);
  expect(getAllByTestId('person-title').textContent).toBe(people.title);
  expect(getAllByTestId('person-email').textContent).toBe(people.email_address);
  expect(getAllByTestId('person-name').textContent).toBe(people.display_name);
  expect(getAllByTestId('personid').length).toBe(people.length);
});
