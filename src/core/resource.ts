// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Flowrapp } from '../client';

export abstract class APIResource {
  protected _client: Flowrapp;

  constructor(client: Flowrapp) {
    this._client = client;
  }
}
