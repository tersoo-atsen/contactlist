import React from 'react';
import { shallow, mount } from 'enzyme';
import { act } from 'react-dom/test-utils';

import getContactsMockedResponse from '../__mocks__/mockedResponses';
import App from '../src/App';
import Tabs from '../src/components/Tabs';
import getContacts from '../src/utils/contactsAPI';

jest.mock('../src/utils/contactsAPI.js', () => jest.fn());

describe('<App />', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should display loading until data arrives', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.loader').length).toEqual(1);
  });

  it('should fetch async data', async () => {
    getContacts.mockResolvedValueOnce(getContactsMockedResponse);
    const wrapper = mount(<App />);
    expect(wrapper.exists).toBeTruthy();
    expect(wrapper.find('div').text()).toBe('Loading...');
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
    });
    wrapper.update();
    expect(wrapper.find(Tabs).length).toEqual(1);
    expect(getContacts).toHaveBeenCalled();
  });

  it('should fail to fetch asymc data', async () => {
    getContacts.mockImplementation(() => null);
    const wrapper = mount(<App />);
    expect(wrapper.exists).toBeTruthy();
    expect(wrapper.find('div').text()).toBe('Loading...');
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
    });
    wrapper.update();
    const errorElement = wrapper.find('.error');
    expect(getContacts).toBeCalled();
    expect(errorElement.length).toEqual(1);
    expect(errorElement.text()).toBe('Something went wrong, please try again.');
  });
});
