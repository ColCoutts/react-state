import React from 'react';
import { shallow } from 'enzyme';
import ColorPicker from './ColorPicker';

describe('ColorPicker component test', () => {
  it('renders a ColorPicker', () => {
    const wrapper = shallow(<ColorPicker />);

    expect(wrapper).toMatchSnapshot();
  });

  it('changes a color to red on button click', () => {
    const wrapper = shallow(<ColorPicker />);

    wrapper.find('button').at(0).simulate('click');

    expect(wrapper.state('color')).toEqual('red');
  });

  it('changes a color to red on button click', () => {
    const wrapper = shallow(<ColorPicker />);

    wrapper.find('button').at(1).simulate('click');

    expect(wrapper.state('color')).toEqual('green');
  });

  it('changes a color to red on button click', () => {
    const wrapper = shallow(<ColorPicker />);

    wrapper.find('button').at(2).simulate('click');

    expect(wrapper.state('color')).toEqual('blue');
  });

  it('changes div classname based on color', done => {
    const wrapper = shallow(<ColorPicker />);

    wrapper.setState({ color: 'red' }, () => {
      expect(wrapper.find('div').at(0).hasClass('red')).toBeTruthy();
      done();
    });
  });
});
