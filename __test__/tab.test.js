import React from 'react';
import { mount } from 'enzyme';

import Tab from '../src/components/Tab';

describe('<Tab />', () => {
  let wrapper;
  let props = {
    activeTab: 'l',
    label: 'a',
    onClick: jest.fn(),
    disabled: false,
    count: 2,
  };

  beforeEach(() => {
    wrapper = mount(<Tab {...props} />);
  });

  it('should render <Tab />', () => {
    expect(wrapper.find(Tab)).toBeDefined();
    expect(wrapper.find('.tab-list-item')).toBeDefined();
  });

  it('shoud set active tab', () => {
    const tab = wrapper.find('.tab-list-item');
    tab.simulate('click');
    props = {
      ...props,
      activeTab: 'a',
    };
    wrapper = mount(<Tab {...props} />);
    expect(wrapper.prop('activeTab')).toEqual('a');
  });
});
