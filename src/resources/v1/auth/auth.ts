// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as OAuthAPI from './oauth';
import { OAuth, OAuthAuthenticateWithGitHubParams, OAuthAuthenticateWithGoogleParams } from './oauth';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Auth extends APIResource {
  oauth: OAuthAPI.OAuth = new OAuthAPI.OAuth(this._client);

  /**
   * Authenticates a user by validating their username and password credentials. Upon
   * successful authentication, it generates and returns access and refresh tokens
   * that can be used for subsequent authorized API requests.
   *
   * @example
   * ```ts
   * const tokenResponse = await client.v1.auth.login({
   *   password: 'pass',
   *   username: 'user',
   * });
   * ```
   */
  login(body: AuthLoginParams, options?: RequestOptions): APIPromise<TokenResponse> {
    return this._client.post('/api/v1/auth/login', { body, ...options });
  }

  /**
   * Renews authentication by generating new access and refresh tokens using a valid
   * refresh token.
   *
   * @example
   * ```ts
   * const tokenResponse = await client.v1.auth.refreshToken({
   *   refreshToken: 'd8a1fef4-234d-4c2b-bd7a-...',
   * });
   * ```
   */
  refreshToken(body: AuthRefreshTokenParams, options?: RequestOptions): APIPromise<TokenResponse> {
    return this._client.post('/api/v1/auth/token-refresh', { body, ...options });
  }
}

/**
 * Response object containing authentication tokens
 */
export interface TokenResponse {
  /**
   * JWT access token
   */
  accessToken?: string;

  /**
   * Refresh token for obtaining new access tokens
   */
  refreshToken?: string;
}

export interface AuthLoginParams {
  /**
   * Password for authentication
   */
  password: string;

  /**
   * Username for authentication
   */
  username: string;
}

export interface AuthRefreshTokenParams {
  /**
   * Refresh token for obtaining new access tokens
   */
  refreshToken: string;
}

Auth.OAuth = OAuth;

export declare namespace Auth {
  export {
    type TokenResponse as TokenResponse,
    type AuthLoginParams as AuthLoginParams,
    type AuthRefreshTokenParams as AuthRefreshTokenParams,
  };

  export {
    OAuth as OAuth,
    type OAuthAuthenticateWithGitHubParams as OAuthAuthenticateWithGitHubParams,
    type OAuthAuthenticateWithGoogleParams as OAuthAuthenticateWithGoogleParams,
  };
}
