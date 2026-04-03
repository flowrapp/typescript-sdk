// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Flowrapp from 'flowrapp-sdk';

const client = new Flowrapp({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource worklogs', () => {
  // Mock server tests are disabled
  test.skip('clockOut: only required params', async () => {
    const responsePromise = client.v1.worker.businesses.worklogs.clockOut(0, { businessId: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('clockOut: required and optional params', async () => {
    const response = await client.v1.worker.businesses.worklogs.clockOut(0, {
      businessId: 0,
      clockOut: '2025-07-29T17:30:00+02:00',
    });
  });
});
