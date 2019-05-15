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

});
