// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Flowrapp from 'flowrapp-sdk';

const client = new Flowrapp({
  username: 'My Username',
  password: 'My Password',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource oauth', () => {
  // Prism tests are disabled
  test.skip('authenticateWithGitHub: only required params', async () => {
    const responsePromise = client.v1.auth.oauth.authenticateWithGitHub({
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

  // Prism tests are disabled
  test.skip('authenticateWithGitHub: required and optional params', async () => {
    const response = await client.v1.auth.oauth.authenticateWithGitHub({
      credential: 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjE2MjM0NTY3ODkwIn0...',
    });
  });

  // Prism tests are disabled
  test.skip('authenticateWithGoogle: only required params', async () => {
    const responsePromise = client.v1.auth.oauth.authenticateWithGoogle({
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

  // Prism tests are disabled
  test.skip('authenticateWithGoogle: required and optional params', async () => {
    const response = await client.v1.auth.oauth.authenticateWithGoogle({
      credential: 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjE2MjM0NTY3ODkwIn0...',
    });
  });
});
