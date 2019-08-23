import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Frequency from './Frequency';

afterEach(() => {
  cleanup();
});

const email = ['aaron@test.com', 'billings@test.com', 'amanda@test.com'];

test('<Frequency />', async () => {
  const { debug, queryByLabelText } = render(
    <MemoryRouter>
      <Frequency email={email} />
    </MemoryRouter>
  );
  expect(queryByLabelText('the frequency is 6')).toBeTruthy();
  expect(queryByLabelText('the character is d')).toBeTruthy();
});
