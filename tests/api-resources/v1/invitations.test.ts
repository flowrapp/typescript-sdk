// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Flowrapp from 'flowrapp-sdk';

const client = new Flowrapp({
  username: 'My Username',
  password: 'My Password',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource invitations', () => {
  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.v1.invitations.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.v1.invitations.list({ status: 'PENDING' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Flowrapp.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('accept: only required params', async () => {
    const responsePromise = client.v1.invitations.accept({ token: 'ecc2efdd-ddfa-31a9-c6f1-b833d337aa7c' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('accept: required and optional params', async () => {
    const response = await client.v1.invitations.accept({ token: 'ecc2efdd-ddfa-31a9-c6f1-b833d337aa7c' });
  });

  // Prism tests are disabled
  test.skip('register: only required params', async () => {
    const responsePromise = client.v1.invitations.register({
      token: 'ecc2efdd-ddfa-31a9-c6f1-b833d337aa7c',
      password: 'securePassword123',
      phone: '+1234567890',
      username: 'johndoe',
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
  test.skip('register: required and optional params', async () => {
    const response = await client.v1.invitations.register({
      token: 'ecc2efdd-ddfa-31a9-c6f1-b833d337aa7c',
      password: 'securePassword123',
      phone: '+1234567890',
      username: 'johndoe',
    });
  });
});
