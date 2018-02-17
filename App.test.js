import React from 'react';
import App from './App';
import Landing from './components/Landing';
import StatsView from './components/StatsView';

import renderer from 'react-test-renderer';

it('App renders without crashing', () => {
  const rendered = renderer.create(<App />).toJSON();
  expect(rendered).toBeTruthy();
});

it('Landing renders without crashing', () => {
  const rendered = renderer.create(<Landing />).toJSON();
  expect(rendered).toBeTruthy();
});

it('StatsView renders without crashing', () => {
  const rendered = renderer.create(<StatsView />).toJSON();
  expect(rendered).toBeTruthy();
});
