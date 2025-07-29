// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as UsersAPI from './users';
import { UserCreateParams, UserCreateResponse, Users } from './users';

export class V1 extends APIResource {
  users: UsersAPI.Users = new UsersAPI.Users(this._client);
}

V1.Users = Users;

export declare namespace V1 {
  export {
    Users as Users,
    type UserCreateResponse as UserCreateResponse,
    type UserCreateParams as UserCreateParams,
  };
}
