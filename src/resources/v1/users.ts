// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Users extends APIResource {
  /**
   * Searches for and retrieves a user profile based on the provided name.
   *
   * @example
   * ```ts
   * const response = await client.v1.users.createFromName({
   *   name: 'John Doe',
   * });
   * ```
   */
  createFromName(
    body: UserCreateFromNameParams,
    options?: RequestOptions,
  ): APIPromise<UserCreateFromNameResponse> {
    return this._client.post('/api/v1/users', { body, ...options });
  }

  /**
   * Updates the password for the authenticated user.
   *
   * @example
   * ```ts
   * await client.v1.users.updatePassword({
   *   password: 'newSecurePassword123',
   * });
   * ```
   */
  updatePassword(body: UserUpdatePasswordParams, options?: RequestOptions): APIPromise<void> {
    return this._client.put('/api/v1/users/password', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

/**
 * Response object containing user information
 */
export interface UserCreateFromNameResponse {
  /**
   * Document National Identity of the user
   */
  dni?: string;

  /**
   * Name of the user
   */
  name?: string;
}

export interface UserCreateFromNameParams {
  /**
   * Name of the user
   */
  name: string;
}

export interface UserUpdatePasswordParams {
  /**
   * New password for the user
   */
  password: string;
}

export declare namespace Users {
  export {
    type UserCreateFromNameResponse as UserCreateFromNameResponse,
    type UserCreateFromNameParams as UserCreateFromNameParams,
    type UserUpdatePasswordParams as UserUpdatePasswordParams,
  };
}
