// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Flowrapp from 'flowrapp-sdk';

const client = new Flowrapp({
  username: 'My Username',
  password: 'My Password',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource admin', () => {
  // skipped: tests are disabled for the time being
  test.skip('registerUser: only required params', async () => {
    const responsePromise = client.v1.admin.registerUser({
      business: [
        { location: { area: 5.3, latitude: 30.5, longitude: 50.5 }, name: 'Business 1' },
        { location: { area: 3.9, latitude: 35.2, longitude: 45.7 }, name: 'Business 2' },
      ],
      mail: 'mail',
      username: 'username',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('registerUser: required and optional params', async () => {
    const response = await client.v1.admin.registerUser({
      business: [
        { location: { area: 5.3, latitude: 30.5, longitude: 50.5 }, name: 'Business 1' },
        { location: { area: 3.9, latitude: 35.2, longitude: 45.7 }, name: 'Business 2' },
      ],
      mail: 'mail',
      username: 'username',
    });
  });
});
