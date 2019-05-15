import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App tests', () => {
  it('renders an App', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });

  it('changes color on selectColor even', () => {
    const wrapper = shallow(<App />);

    wrapper.instance().selectColor('green');
    expect(wrapper.state('color')).toEqual('green');
  });
});
