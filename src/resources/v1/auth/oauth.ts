// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AuthAPI from './auth';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

/**
 * User authentication and token management endpoints. These are pass-through proxies to the main API.
 */
export class OAuth extends APIResource {
  /**
   * Exchanges a GitHub OAuth authorization code for Flowrapp access and refresh
   * tokens. Pass-through to the main API.
   *
   * @example
   * ```ts
   * const tokenResponse =
   *   await client.v1.auth.oauth.githubAuthenticate({
   *     credential:
   *       'eyJhbGciOiJSUzI1NiIsImtpZCI6IjE2MjM0NTY3ODkwIn0...',
   *   });
   * ```
   */
  githubAuthenticate(
    body: OAuthGitHubAuthenticateParams,
    options?: RequestOptions,
  ): APIPromise<AuthAPI.TokenResponse> {
    return this._client.post('/api/v1/auth/oauth/github', { body, ...options, __security: {} });
  }

  /**
   * Exchanges a Google OAuth credential (ID token) for Flowrapp access and refresh
   * tokens. Pass-through to the main API.
   *
   * @example
   * ```ts
   * const tokenResponse =
   *   await client.v1.auth.oauth.googleAuthenticate({
   *     credential:
   *       'eyJhbGciOiJSUzI1NiIsImtpZCI6IjE2MjM0NTY3ODkwIn0...',
   *   });
   * ```
   */
  googleAuthenticate(
    body: OAuthGoogleAuthenticateParams,
    options?: RequestOptions,
  ): APIPromise<AuthAPI.TokenResponse> {
    return this._client.post('/api/v1/auth/oauth/google', { body, ...options, __security: {} });
  }
}

/**
 * Request object containing a third-party OAuth credential
 */
export interface CredentialRequest {
  /**
   * The credential string obtained from the OAuth provider (e.g., Google ID token or
   * GitHub authorization code)
   */
  credential: string;
}

export interface OAuthGitHubAuthenticateParams {
  /**
   * The credential string obtained from the OAuth provider (e.g., Google ID token or
   * GitHub authorization code)
   */
  credential: string;
}

export interface OAuthGoogleAuthenticateParams {
  /**
   * The credential string obtained from the OAuth provider (e.g., Google ID token or
   * GitHub authorization code)
   */
  credential: string;
}

export declare namespace OAuth {
  export {
    type CredentialRequest as CredentialRequest,
    type OAuthGitHubAuthenticateParams as OAuthGitHubAuthenticateParams,
    type OAuthGoogleAuthenticateParams as OAuthGoogleAuthenticateParams,
  };
}
