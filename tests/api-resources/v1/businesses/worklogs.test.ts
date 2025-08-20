// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Flowrapp from 'flowrapp-sdk';

const client = new Flowrapp({
  username: 'My Username',
  password: 'My Password',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource worklogs', () => {
  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.v1.businesses.worklogs.list(0);
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
      client.v1.businesses.worklogs.list(
        0,
        { date: '2025-07-29', from: '2025-07-22', to: '2025-07-28', userId: 123 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Flowrapp.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('clockIn', async () => {
    const responsePromise = client.v1.businesses.worklogs.clockIn(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('clockIn: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.v1.businesses.worklogs.clockIn(
        0,
        { clockIn: '2025-07-29T08:30:00+00:00' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Flowrapp.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('clockOut: only required params', async () => {
    const responsePromise = client.v1.businesses.worklogs.clockOut(0, { businessId: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('clockOut: required and optional params', async () => {
    const response = await client.v1.businesses.worklogs.clockOut(0, {
      businessId: 0,
      clockOut: '2025-07-29T17:30:00+00:00',
    });
  });
});
