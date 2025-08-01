// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Flowrapp from 'flowrapp-sdk';

const client = new Flowrapp({
  username: 'My Username',
  password: 'My Password',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource auth', () => {
  // skipped: tests are disabled for the time being
  test.skip('login: only required params', async () => {
    const responsePromise = client.v1.auth.login({ password: 'pass', username: 'user' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('login: required and optional params', async () => {
    const response = await client.v1.auth.login({ password: 'pass', username: 'user' });
  });

  // skipped: tests are disabled for the time being
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

  // skipped: tests are disabled for the time being
  test.skip('refreshToken: required and optional params', async () => {
    const response = await client.v1.auth.refreshToken({ refreshToken: 'd8a1fef4-234d-4c2b-bd7a-...' });
  });
});
