// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Flowrapp from 'flowrapp';

const client = new Flowrapp({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource history', () => {
  // Mock server tests are disabled
  test.skip('day', async () => {
    const responsePromise = client.v1.worker.businesses.history.day(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('day: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.v1.worker.businesses.history.day(
        0,
        { date: '2025-03-10' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Flowrapp.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('month', async () => {
    const responsePromise = client.v1.worker.businesses.history.month(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('month: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.v1.worker.businesses.history.month(
        0,
        { month: '2025-03' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Flowrapp.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('week', async () => {
    const responsePromise = client.v1.worker.businesses.history.week(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('week: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.v1.worker.businesses.history.week(0, { week: '2025-W31' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Flowrapp.NotFoundError);
  });
});
