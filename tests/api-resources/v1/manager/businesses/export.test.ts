// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Flowrapp from 'flowrapp';

const client = new Flowrapp({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource export', () => {
  // Mock server tests are disabled
  test.skip('weeklyTimesheet: required and optional params', async () => {
    const response = await client.v1.manager.businesses.export.weeklyTimesheet(0, { week: '2025-W31' });
  });
});
