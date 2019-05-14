import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App snapshot', () => {
  it('can render App', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
