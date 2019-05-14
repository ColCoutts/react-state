import React from 'react';
import { shallow } from 'enzyme';
import Incrementer from './Incrementer';

describe('incrementer component', () => {
  it('renders incrementer component', () => {
    const wrapper = shallow(<Incrementer />);
    expect(wrapper).toMatchSnapshot();
  });

  it('increments on count button', done => {
    const wrapper = shallow(<Incrementer />);

    wrapper.find('button').at(0).simulate('click');

    expect(wrapper.state('click')).toEqual(1);
    done();
  });
});
