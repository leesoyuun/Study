import { render, screen } from '@testing-library/react';
import App from './App';

const signup = require("../src/page/sign_up/sign_up");
test('signup', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
