// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class PushTokens extends APIResource {
  /**
   * Deletes a device push notification token for the authenticated user
   *
   * @example
   * ```ts
   * const pushToken = await client.v1.pushTokens.delete({
   *   deviceId: 'uuid-of-device',
   * });
   * ```
   */
  delete(body: PushTokenDeleteParams, options?: RequestOptions): APIPromise<PushTokenDeleteResponse> {
    return this._client.delete('/api/v1/push-tokens', { body, ...options });
  }

  /**
   * Registers a device push notification token for the authenticated user
   *
   * @example
   * ```ts
   * const response = await client.v1.pushTokens.register({
   *   token: 'abcdef123456',
   *   deviceId: 'uuid-of-device',
   *   platform: 'ANDROID',
   * });
   * ```
   */
  register(body: PushTokenRegisterParams, options?: RequestOptions): APIPromise<PushTokenRegisterResponse> {
    return this._client.post('/api/v1/push-tokens', { body, ...options });
  }
}

export interface PushTokenDeleteResponse {
  message?: string;

  success?: boolean;
}

export interface PushTokenRegisterResponse {
  message?: string;

  success?: boolean;
}

export interface PushTokenDeleteParams {
  /**
   * Unique identifier for the device
   */
  deviceId: string;
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
  export {
    type PushTokenDeleteResponse as PushTokenDeleteResponse,
    type PushTokenRegisterResponse as PushTokenRegisterResponse,
    type PushTokenDeleteParams as PushTokenDeleteParams,
    type PushTokenRegisterParams as PushTokenRegisterParams,
  };
}
