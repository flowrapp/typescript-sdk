// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as OAuthAPI from './oauth';
import { OAuth, OAuthAuthenticateWithGitHubParams, OAuthAuthenticateWithGoogleParams } from './oauth';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

/**
 * User authentication and token management endpoints. These are pass-through proxies to the main API.
 */
export class Auth extends APIResource {
  oauth: OAuthAPI.OAuth = new OAuthAPI.OAuth(this._client);

  /**
   * Authenticates a user by validating their email and password credentials. Returns
   * access and refresh tokens for subsequent API requests. This is a pass-through to
   * the main API.
   *
   * @example
   * ```ts
   * const tokenResponse = await client.v1.auth.login({
   *   password: 'securePassword123',
   *   username: 'user@example.com',
   * });
   * ```
   */
  login(body: AuthLoginParams, options?: RequestOptions): APIPromise<TokenResponse> {
    return this._client.post('/api/v1/auth/login', { body, ...options });
  }

  /**
   * Renews authentication by generating new access and refresh tokens using a valid
   * refresh token. Pass-through to the main API.
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
   * JWT access token for API authorization
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
   * Username (email) for authentication
   */
  username: string;
}

export interface AuthRefreshTokenParams {
  /**
   * Refresh token previously issued during login
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
