// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AuthAPI from './auth';
import { Auth, AuthLoginParams, AuthRefreshTokenParams, TokenResponse } from './auth';
import * as MeAPI from './me';
import { Me, MeRetrieveProfileResponse, MeUpdatePasswordParams } from './me';
import * as PushTokensAPI from './push-tokens';
import { PushTokenRegisterParams, PushTokens } from './push-tokens';
import * as ManagerAPI from './manager/manager';
import { Manager } from './manager/manager';
import * as WorkerAPI from './worker/worker';
import { Worker } from './worker/worker';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

/**
 * System utility endpoints for health checks.
 */
export class V1 extends APIResource {
  auth: AuthAPI.Auth = new AuthAPI.Auth(this._client);
  me: MeAPI.Me = new MeAPI.Me(this._client);
  pushTokens: PushTokensAPI.PushTokens = new PushTokensAPI.PushTokens(this._client);
  worker: WorkerAPI.Worker = new WorkerAPI.Worker(this._client);
  manager: ManagerAPI.Manager = new ManagerAPI.Manager(this._client);

  /**
   * Simple endpoint to verify that the BFF API is up and running
   *
   * @example
   * ```ts
   * const response = await client.v1.checkHealth();
   * ```
   */
  checkHealth(options?: RequestOptions): APIPromise<V1CheckHealthResponse> {
    return this._client.get('/api/v1/ping', { ...options, __security: {} });
  }
}

export interface V1CheckHealthResponse {
  status: string;

  timestamp: string;
}

V1.Auth = Auth;
V1.Me = Me;
V1.PushTokens = PushTokens;
V1.Worker = Worker;
V1.Manager = Manager;

export declare namespace V1 {
  export { type V1CheckHealthResponse as V1CheckHealthResponse };

  export {
    Auth as Auth,
    type TokenResponse as TokenResponse,
    type AuthLoginParams as AuthLoginParams,
    type AuthRefreshTokenParams as AuthRefreshTokenParams,
  };

  export {
    Me as Me,
    type MeRetrieveProfileResponse as MeRetrieveProfileResponse,
    type MeUpdatePasswordParams as MeUpdatePasswordParams,
  };

  export { PushTokens as PushTokens, type PushTokenRegisterParams as PushTokenRegisterParams };

  export { Worker as Worker };

  export { Manager as Manager };
}
