import React from 'react';
import { mount } from 'enzyme';

import Content from '../src/components/Content';

describe('<Content />', () => {
  let wrapper;
  const props = {
    contacts: [{
      name: {
        title: 'Mr',
        first: 'Wade',
        last: 'Henry',
      },
      location: {
        street: {
          number: 441,
          name: 'Miller Ave',
        },
        city: 'Adelaide',
        state: 'South Australia',
        country: 'Australia',
        postcode: 839,
        coordinates: {
          latitude: '-80.7664',
          longitude: '-93.2426',
        },
        timezone: {
          offset: '-3:00',
          description: 'Brazil, Buenos Aires, Georgetown',
        },
      },
      email: 'wade.henry@example.com',
      login: {
        uuid: 'f6508087-105e-4b18-a55e-c2220117d201',
        username: 'greenwolf792',
        password: 'elvis',
        salt: 'gct3TfF6',
        md5: '7ee32839d076b02c873803bd462837ce',
        sha1: 'ce5446dceda37a6785de09e49a031de9cd614e37',
        sha256: 'beaa5d47f25dedc089294ce1f26a511227f95af05d1b5863029f8462ed5de48e',
      },
      phone: '00-0148-1008',
      picture: {
        large: 'https://randomuser.me/api/portraits/men/14.jpg',
        medium: 'https://randomuser.me/api/portraits/med/men/14.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/men/14.jpg',
      },
    }],
  };

  beforeEach(() => {
    wrapper = mount(<Content {...props} />);
  });

  it('should render <Content />', () => {
    expect(wrapper.find('.contact-list__column')).toBeDefined();
    expect(wrapper.find('.contact-list__contact')).toBeDefined();
  });

  it('should toggle modal', () => {
    wrapper.find('.contact-list__contact').simulate('click');
    wrapper.update();
    let closeModalButton = wrapper.find('.modal__close');
    expect(wrapper.find('.modal').length).toEqual(1);
    expect(closeModalButton.length).toEqual(1);
    closeModalButton.simulate('click');
    wrapper.update();
    closeModalButton = wrapper.find('.modal__close');
    expect(wrapper.find('.modal').length).toEqual(0);
    expect(closeModalButton.length).toEqual(0);
  });
});
