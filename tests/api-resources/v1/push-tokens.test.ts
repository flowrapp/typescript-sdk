// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Flowrapp from 'flowrapp';

const client = new Flowrapp({
  username: 'My Username',
  password: 'My Password',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource pushTokens', () => {
  // skipped: tests are disabled for the time being
  test.skip('delete: only required params', async () => {
    const responsePromise = client.v1.pushTokens.delete({ deviceId: 'uuid-of-device' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('delete: required and optional params', async () => {
    const response = await client.v1.pushTokens.delete({ deviceId: 'uuid-of-device' });
  });

  // skipped: tests are disabled for the time being
  test.skip('register: only required params', async () => {
    const responsePromise = client.v1.pushTokens.register({
      token: 'abcdef123456',
      deviceId: 'uuid-of-device',
      platform: 'ANDROID',
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
  test.skip('register: required and optional params', async () => {
    const response = await client.v1.pushTokens.register({
      token: 'abcdef123456',
      deviceId: 'uuid-of-device',
      platform: 'ANDROID',
    });
  });
});
