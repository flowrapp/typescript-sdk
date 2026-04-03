// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AdminAPI from './admin';
import { Admin } from './admin';
import * as InvitationsAPI from './invitations';
import { Invitations } from './invitations';
import * as PushTokensAPI from './push-tokens';
import { PushTokenRegisterParams, PushTokens } from './push-tokens';
import * as TimesheetsAPI from './timesheets';
import { Timesheets } from './timesheets';
import * as UsersAPI from './users';
import { Users } from './users';
import * as WorklogsAPI from './worklogs';
import { Worklogs } from './worklogs';
import * as AuthAPI from './auth/auth';
import { Auth, AuthLoginParams, AuthRefreshTokenParams, TokenResponse } from './auth/auth';
import * as BusinessesAPI from './businesses/businesses';
import { Businesses, Location } from './businesses/businesses';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

/**
 * System utility endpoints for health checks.
 */
export class V1 extends APIResource {
  users: UsersAPI.Users = new UsersAPI.Users(this._client);
  pushTokens: PushTokensAPI.PushTokens = new PushTokensAPI.PushTokens(this._client);
  auth: AuthAPI.Auth = new AuthAPI.Auth(this._client);
  admin: AdminAPI.Admin = new AdminAPI.Admin(this._client);
  businesses: BusinessesAPI.Businesses = new BusinessesAPI.Businesses(this._client);
  invitations: InvitationsAPI.Invitations = new InvitationsAPI.Invitations(this._client);
  worklogs: WorklogsAPI.Worklogs = new WorklogsAPI.Worklogs(this._client);
  timesheets: TimesheetsAPI.Timesheets = new TimesheetsAPI.Timesheets(this._client);

  /**
   * Simple endpoint to verify that the BFF API is up and running
   *
   * @example
   * ```ts
   * const response = await client.v1.ping();
   * ```
   */
  ping(options?: RequestOptions): APIPromise<V1PingResponse> {
    return this._client.get('/api/v1/ping', options);
  }
}

export interface V1PingResponse {
  status: string;

  timestamp: string;
}

V1.Users = Users;
V1.PushTokens = PushTokens;
V1.Auth = Auth;
V1.Admin = Admin;
V1.Businesses = Businesses;
V1.Invitations = Invitations;
V1.Worklogs = Worklogs;
V1.Timesheets = Timesheets;

export declare namespace V1 {
  export { type V1PingResponse as V1PingResponse };

  export { Users as Users };

  export { PushTokens as PushTokens, type PushTokenRegisterParams as PushTokenRegisterParams };

  export {
    Auth as Auth,
    type TokenResponse as TokenResponse,
    type AuthLoginParams as AuthLoginParams,
    type AuthRefreshTokenParams as AuthRefreshTokenParams,
  };

  export { Admin as Admin };

  export { Businesses as Businesses, type Location as Location };

  export { Invitations as Invitations };

  export { Worklogs as Worklogs };

  export { Timesheets as Timesheets };
}
