// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

/**
 * Current user profile and account management.
 */
export class Me extends APIResource {
  /**
   * Returns the profile of the currently authenticated user, including their name,
   * email, phone, and global system role.
   *
   * @example
   * ```ts
   * const response = await client.v1.me.retrieveProfile();
   * ```
   */
  retrieveProfile(options?: RequestOptions): APIPromise<MeRetrieveProfileResponse> {
    return this._client.get('/api/v1/me', options);
  }

  /**
   * Updates the password for the currently authenticated user.
   *
   * @example
   * ```ts
   * await client.v1.me.updatePassword({
   *   password: 'newSecurePassword123',
   * });
   * ```
   */
  updatePassword(body: MeUpdatePasswordParams, options?: RequestOptions): APIPromise<void> {
    return this._client.put('/api/v1/me/password', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

/**
 * Current authenticated user's profile information
 */
export interface MeRetrieveProfileResponse {
  /**
   * Unique identifier of the user
   */
  id: number;

  /**
   * Email address of the user
   */
  email: string;

  /**
   * Display name of the user
   */
  name: string;

  /**
   * Global role of the user in the system
   */
  role: 'ADMIN' | 'USER';

  /**
   * Phone number of the user
   */
  phone?: string;
}

export interface MeUpdatePasswordParams {
  /**
   * New password
   */
  password: string;
}

export declare namespace Me {
  export {
    type MeRetrieveProfileResponse as MeRetrieveProfileResponse,
    type MeUpdatePasswordParams as MeUpdatePasswordParams,
  };
}
