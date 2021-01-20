import React from 'react';
import { mount } from 'enzyme';

import Tabs from '../src/components/Tabs';
import Tab from '../src/components/Tab';
import getContactsMockedResponse from '../__mocks__/mockedResponses';

describe('<Tabs />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <Tabs>
        {getContactsMockedResponse.map((item) => (
          <div key={item.tab} label={item.tab}>
            {item.data}
          </div>
        ))}
      </Tabs>,
    );
  });

  it('should render <Tabs />', () => {
    expect(wrapper.find(Tabs)).toBeDefined();
    expect(wrapper.find('.tab-menu')).toBeDefined();
    expect(wrapper.find('.tab-menu__title')).toBeDefined();
    expect(wrapper.find('.tab-list-item').length).toEqual(26);
    expect(wrapper.find('.tab-menu__container')).toBeDefined();
  });

  it('should set active tab', () => {
    expect(wrapper.find('.tab-list-item--active').parent().prop('label')).toEqual('a');
    const tab = wrapper
      .findWhere((n) => n.name() === 'Tab' && n.prop('label') === 'w');
    tab.childAt(0).simulate('click');
    wrapper.update();
    expect(wrapper.find('.tab-list-item--active').parent().prop('label')).toEqual('w');
  });
});
