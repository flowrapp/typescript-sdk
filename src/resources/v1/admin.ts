// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as BusinessesAPI from './businesses/businesses';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Admin extends APIResource {
  /**
   * Creates a new user account in the system with associations to one or more
   * businesses.
   *
   * @example
   * ```ts
   * await client.v1.admin.registerUser({
   *   business: [
   *     {
   *       location: {
   *         area: 5.3,
   *         latitude: 30.5,
   *         longitude: 50.5,
   *       },
   *       name: 'Business 1',
   *       timezoneOffset: 'America/Caracas',
   *     },
   *     {
   *       location: {
   *         area: 3.9,
   *         latitude: 35.2,
   *         longitude: 45.7,
   *       },
   *       name: 'Business 2',
   *       timezoneOffset: 'America/Caracas',
   *     },
   *   ],
   *   mail: 'mail',
   *   username: 'username',
   * });
   * ```
   */
  registerUser(body: AdminRegisterUserParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/v1/admin/register', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface AdminRegisterUserParams {
  /**
   * List of businesses associated with the user
   */
  business: Array<AdminRegisterUserParams.Business>;

  /**
   * Email address for the new user
   */
  mail: string;

  /**
   * Username for the new user
   */
  username: string;
}

export namespace AdminRegisterUserParams {
  /**
   * Business information
   */
  export interface Business {
    /**
     * Geographic location information
     */
    location: BusinessesAPI.Location;

    /**
     * Name of the business
     */
    name: string;

    /**
     * IANA time zone identifier for the business (e.g., America/Caracas)
     */
    timezoneOffset: string;
  }
}

export declare namespace Admin {
  export { type AdminRegisterUserParams as AdminRegisterUserParams };
}
