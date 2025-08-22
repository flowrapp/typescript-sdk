// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AuthAPI from './auth';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class OAuth extends APIResource {
  /**
   * Exchanges a GitHub OAuth authorization code for Flowrapp access and refresh
   * tokens.
   *
   * @example
   * ```ts
   * const tokenResponse =
   *   await client.v1.auth.oauth.authenticateWithGitHub({
   *     credential:
   *       'eyJhbGciOiJSUzI1NiIsImtpZCI6IjE2MjM0NTY3ODkwIn0...',
   *   });
   * ```
   */
  authenticateWithGitHub(
    body: OAuthAuthenticateWithGitHubParams,
    options?: RequestOptions,
  ): APIPromise<AuthAPI.TokenResponse> {
    return this._client.post('/api/v1/auth/oauth/github', { body, ...options });
  }

  /**
   * Exchanges a Google OAuth credential (such as an ID token or authorization code)
   * for Flowrapp access and refresh tokens.
   *
   * @example
   * ```ts
   * const tokenResponse =
   *   await client.v1.auth.oauth.authenticateWithGoogle({
   *     credential:
   *       'eyJhbGciOiJSUzI1NiIsImtpZCI6IjE2MjM0NTY3ODkwIn0...',
   *   });
   * ```
   */
  authenticateWithGoogle(
    body: OAuthAuthenticateWithGoogleParams,
    options?: RequestOptions,
  ): APIPromise<AuthAPI.TokenResponse> {
    return this._client.post('/api/v1/auth/oauth/google', { body, ...options });
  }
}

export interface OAuthAuthenticateWithGitHubParams {
  /**
   * The credential string obtained from the OAuth provider
   */
  credential: string;
}

export interface OAuthAuthenticateWithGoogleParams {
  /**
   * The credential string obtained from the OAuth provider
   */
  credential: string;
}

export declare namespace OAuth {
  export {
    type OAuthAuthenticateWithGitHubParams as OAuthAuthenticateWithGitHubParams,
    type OAuthAuthenticateWithGoogleParams as OAuthAuthenticateWithGoogleParams,
  };
}
