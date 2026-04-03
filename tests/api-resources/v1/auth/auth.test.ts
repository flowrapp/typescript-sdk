// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Flowrapp from 'flowrapp-sdk';

const client = new Flowrapp({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource auth', () => {
  // Mock server tests are disabled
  test.skip('login: only required params', async () => {
    const responsePromise = client.v1.auth.login({
      password: 'securePassword123',
      username: 'user@example.com',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('login: required and optional params', async () => {
    const response = await client.v1.auth.login({
      password: 'securePassword123',
      username: 'user@example.com',
    });
  });

  // Mock server tests are disabled
  test.skip('refreshToken: only required params', async () => {
    const responsePromise = client.v1.auth.refreshToken({ refreshToken: 'd8a1fef4-234d-4c2b-bd7a-...' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('refreshToken: required and optional params', async () => {
    const response = await client.v1.auth.refreshToken({ refreshToken: 'd8a1fef4-234d-4c2b-bd7a-...' });
  });
});
