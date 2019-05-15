import React from 'react';
import { shallow } from 'enzyme';
import ColorPicker from './ColorPicker';

describe('ColorPicker component', () => {
  it('renders a ColorPicker', () => {
    const wrapper = shallow(<ColorPicker selectColorHandler={jest.fn()} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('selects a red button on click', () => {
    const selectColorHandler = jest.fn();
    const wrapper = shallow(<ColorPicker selectColorHandler={selectColorHandler} />);

    wrapper.find('button').at(0).simulate('click');

    expect(selectColorHandler).toHaveBeenCalledWith('red');
  });

  it('select a green button on click', () => {
    const selectColorHandler = jest.fn();
    const wrapper = shallow(<ColorPicker selectColorHandler={selectColorHandler} />);

    wrapper.find('button').at(1).simulate('click');
    expect(selectColorHandler).toHaveBeenCalledWith('green');
  });

  it('select a blue button on click', () => {
    const selectColorHandler = jest.fn();
    const wrapper = shallow(<ColorPicker selectColorHandler={selectColorHandler} />);

    wrapper.find('button').at(2).simulate('click');
    expect(selectColorHandler).toHaveBeenCalledWith('blue');
  });

});
