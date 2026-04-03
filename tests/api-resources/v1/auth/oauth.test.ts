// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Flowrapp from 'flowrapp-sdk';

const client = new Flowrapp({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource oauth', () => {
  // Mock server tests are disabled
  test.skip('githubAuthenticate: only required params', async () => {
    const responsePromise = client.v1.auth.oauth.githubAuthenticate({
      credential: 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjE2MjM0NTY3ODkwIn0...',
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
  test.skip('githubAuthenticate: required and optional params', async () => {
    const response = await client.v1.auth.oauth.githubAuthenticate({
      credential: 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjE2MjM0NTY3ODkwIn0...',
    });
  });

  // Mock server tests are disabled
  test.skip('googleAuthenticate: only required params', async () => {
    const responsePromise = client.v1.auth.oauth.googleAuthenticate({
      credential: 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjE2MjM0NTY3ODkwIn0...',
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
  test.skip('googleAuthenticate: required and optional params', async () => {
    const response = await client.v1.auth.oauth.googleAuthenticate({
      credential: 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjE2MjM0NTY3ODkwIn0...',
    });
  });
});
