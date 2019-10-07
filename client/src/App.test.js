import React from 'react';
import ReactDOM from 'react-dom';
import { render } from "@testing-library/react";
import App from './App';
import Display from './components/Display';
import { Players } from './components/Players';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

test('App component renders properly', () => {
  render(<App />);
});

test('Display component renders properly', () => {
  render(<Display />);
});

test('Players component renders properly', () => {
  render(<Players />);
});