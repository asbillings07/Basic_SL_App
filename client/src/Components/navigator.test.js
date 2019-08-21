import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Navigator from './Navigator';

test('<Navigator />', () => {
  const wrapper = render(<Navigator />);
  expect(true).toBeTruthy();
});
