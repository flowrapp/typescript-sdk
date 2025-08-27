// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class PushTokens extends APIResource {
  /**
   * Registers a device push notification token for the authenticated user
   *
   * @example
   * ```ts
   * await client.v1.pushTokens.register({
   *   token: 'abcdef123456',
   *   deviceId: 'uuid-of-device',
   *   platform: 'ANDROID',
   * });
   * ```
   */
  register(body: PushTokenRegisterParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/v1/push-tokens', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface PushTokenRegisterParams {
  /**
   * The push notification token
   */
  token: string;

  /**
   * Unique identifier for the device
   */
  deviceId: string;

  /**
   * The device platform
   */
  platform: 'ANDROID' | 'IOS';
}

export declare namespace PushTokens {
  export { type PushTokenRegisterParams as PushTokenRegisterParams };
}
