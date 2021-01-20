import getContacts from '../src/utils/contactsAPI';
import { apiResponse, formattedResponse, emptyAPIResponse } from '../__mocks__/apiMocks';

describe('contactsAPI', () => {
  it('should return empty array if API response is empty array', async () => {
    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve(emptyAPIResponse),
    }));
    const response = await getContacts();

    expect(response).toEqual([]);
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it('should return a list of sorted tags and contacts', async () => {
    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve(apiResponse),
    }));
    const response = await getContacts();

    expect(response).toEqual(formattedResponse);
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it('should return error from api call', async () => {
    const mockError = new Error('API is down');
    global.fetch = jest.fn(() => Promise.reject(mockError));
    const response = await getContacts();

    expect(response).toEqual(null);
    expect(fetch).toHaveBeenCalledTimes(1);
  });
});
