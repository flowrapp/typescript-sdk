// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as BusinessesInvitationsAPI from './businesses/invitations';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Invitations extends APIResource {
  /**
   * Retrieves a list of all invitations for the currently authenticated user.
   *
   * @example
   * ```ts
   * const invitationResponses =
   *   await client.v1.invitations.list();
   * ```
   */
  list(
    query: InvitationListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<InvitationListResponse> {
    return this._client.get('/api/v1/invitations', { query, ...options });
  }

  /**
   * Accepts an invitation to join a business using a token.
   *
   * @example
   * ```ts
   * await client.v1.invitations.accept({
   *   token: 'ecc2efdd-ddfa-31a9-c6f1-b833d337aa7c',
   * });
   * ```
   */
  accept(params: InvitationAcceptParams, options?: RequestOptions): APIPromise<void> {
    const { token } = params;
    return this._client.post('/api/v1/invitations/accept', {
      query: { token },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Registers a new user an accepts the invitation.
   *
   * @example
   * ```ts
   * await client.v1.invitations.register({
   *   token: 'ecc2efdd-ddfa-31a9-c6f1-b833d337aa7c',
   *   password: 'securePassword123',
   *   phone: '+1234567890',
   *   username: 'johndoe',
   * });
   * ```
   */
  register(params: InvitationRegisterParams, options?: RequestOptions): APIPromise<void> {
    const { token, ...body } = params;
    return this._client.post('/api/v1/invitations/register', {
      query: { token },
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type InvitationListResponse = Array<BusinessesInvitationsAPI.InvitationResponse>;

export interface InvitationListParams {
  /**
   * Filter invitations by status
   */
  status?: 'PENDING' | 'ACCEPTED' | 'DECLINED' | 'EXPIRED';
}

export interface InvitationAcceptParams {
  /**
   * Token to validate the invitation
   */
  token: string;
}

export interface InvitationRegisterParams {
  /**
   * Query param: Token from the invitation email to validate the user registration
   */
  token: string;

  /**
   * Body param: Password for the new user
   */
  password: string;

  /**
   * Body param: Phone number of the user
   */
  phone: string;

  /**
   * Body param: Username for the new user
   */
  username: string;
}

export declare namespace Invitations {
  export {
    type InvitationListResponse as InvitationListResponse,
    type InvitationListParams as InvitationListParams,
    type InvitationAcceptParams as InvitationAcceptParams,
    type InvitationRegisterParams as InvitationRegisterParams,
  };
}
