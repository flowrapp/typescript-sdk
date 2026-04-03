// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Push notification token management. Pass-through to the main API.
 */
export class PushTokens extends APIResource {
  /**
   * Deletes a device push notification token for the authenticated user.
   * Pass-through to the main API.
   *
   * @example
   * ```ts
   * await client.v1.pushTokens.delete('deviceId');
   * ```
   */
  delete(deviceID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/api/v1/push-tokens/${deviceID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Registers a device push notification token for the authenticated user.
   * Pass-through to the main API.
   *
   * @example
   * ```ts
   * await client.v1.pushTokens.register({
   *   token: 'fcm-token-abc123xyz',
   *   deviceId: '550e8400-e29b-41d4-a716-446655440000',
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
   * The push notification token from the device
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
