import React from 'react';
import { render, cleanup, getByTestId } from '@testing-library/react';
import Navigator from './Navigator';

afterEach(() => {
  cleanup();
});

console.warn = jest.fn();

test('<Navigator />', () => {
  const { getByTestId } = render(<Navigator />);
  expect(console.warn).toHaveBeenCalledTimes(2);
  expect(getByTestId('nav-title').textContent).toBe('Frequency App');
  expect(getByTestId('nav-people').textContent).toBe('People');
  expect(getByTestId('nav-frequency').textContent).toBe('Frequency');
});
