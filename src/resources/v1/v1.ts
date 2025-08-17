// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AdminAPI from './admin';
import { Admin, AdminRegisterUserParams } from './admin';
import * as AuthAPI from './auth';
import { Auth, AuthLoginParams, AuthRefreshTokenParams, TokenResponse } from './auth';
import * as InvitationsAPI from './invitations';
import {
  InvitationAcceptParams,
  InvitationListParams,
  InvitationListResponse,
  InvitationRegisterParams,
  Invitations,
} from './invitations';
import * as PushTokensAPI from './push-tokens';
import {
  PushTokenDeleteParams,
  PushTokenDeleteResponse,
  PushTokenRegisterParams,
  PushTokenRegisterResponse,
  PushTokens,
} from './push-tokens';
import * as UsersAPI from './users';
import { UserCreateFromNameParams, UserCreateFromNameResponse, Users } from './users';
import * as BusinessesAPI from './businesses/businesses';
import {
  BusinessListResponse,
  BusinessListUsersParams,
  BusinessListUsersResponse,
  Businesses,
  Location,
} from './businesses/businesses';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class V1 extends APIResource {
  users: UsersAPI.Users = new UsersAPI.Users(this._client);
  pushTokens: PushTokensAPI.PushTokens = new PushTokensAPI.PushTokens(this._client);
  auth: AuthAPI.Auth = new AuthAPI.Auth(this._client);
  admin: AdminAPI.Admin = new AdminAPI.Admin(this._client);
  businesses: BusinessesAPI.Businesses = new BusinessesAPI.Businesses(this._client);
  invitations: InvitationsAPI.Invitations = new InvitationsAPI.Invitations(this._client);

  /**
   * Simple endpoint to verify that the API is up and running
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

  timestamp?: string;
}

V1.Users = Users;
V1.PushTokens = PushTokens;
V1.Auth = Auth;
V1.Admin = Admin;
V1.Businesses = Businesses;
V1.Invitations = Invitations;

export declare namespace V1 {
  export { type V1PingResponse as V1PingResponse };

  export {
    Users as Users,
    type UserCreateFromNameResponse as UserCreateFromNameResponse,
    type UserCreateFromNameParams as UserCreateFromNameParams,
  };

  export {
    PushTokens as PushTokens,
    type PushTokenDeleteResponse as PushTokenDeleteResponse,
    type PushTokenRegisterResponse as PushTokenRegisterResponse,
    type PushTokenDeleteParams as PushTokenDeleteParams,
    type PushTokenRegisterParams as PushTokenRegisterParams,
  };

  export {
    Auth as Auth,
    type TokenResponse as TokenResponse,
    type AuthLoginParams as AuthLoginParams,
    type AuthRefreshTokenParams as AuthRefreshTokenParams,
  };

  export { Admin as Admin, type AdminRegisterUserParams as AdminRegisterUserParams };

  export {
    Businesses as Businesses,
    type Location as Location,
    type BusinessListResponse as BusinessListResponse,
    type BusinessListUsersResponse as BusinessListUsersResponse,
    type BusinessListUsersParams as BusinessListUsersParams,
  };

  export {
    Invitations as Invitations,
    type InvitationListResponse as InvitationListResponse,
    type InvitationListParams as InvitationListParams,
    type InvitationAcceptParams as InvitationAcceptParams,
    type InvitationRegisterParams as InvitationRegisterParams,
  };
}
