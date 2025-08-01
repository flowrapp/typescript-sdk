// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Users extends APIResource {
  /**
   * Searches for and retrieves a user profile based on the provided name.
   *
   * @example
   * ```ts
   * const user = await client.v1.users.create({
   *   name: 'John Doe',
   * });
   * ```
   */
  create(body: UserCreateParams, options?: RequestOptions): APIPromise<UserCreateResponse> {
    return this._client.post('/api/v1/users', { body, ...options });
  }
}

/**
 * Response object containing user information
 */
export interface UserCreateResponse {
  /**
   * Document National Identity of the user
   */
  dni?: string;

  /**
   * Name of the user
   */
  name?: string;
}

export interface UserCreateParams {
  /**
   * Name of the user
   */
  name: string;
}

export declare namespace Users {
  export { type UserCreateResponse as UserCreateResponse, type UserCreateParams as UserCreateParams };
}
