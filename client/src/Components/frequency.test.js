import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Frequency from './Frequency';

afterEach(() => {
  cleanup();
});

const email = [
  'aaron@test.com',
  'billings@test.com',
  'amanda@test.com',
  'rachel@test.com',
  'eden@test.com',
  'esther@test.com',
];

test('<Frequency />', async () => {
  const { debug, getByTestId } = render(
    <MemoryRouter>
      <Frequency email={email} />
    </MemoryRouter>
  );

  debug();
});
