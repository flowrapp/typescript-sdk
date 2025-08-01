// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Invitations extends APIResource {
  /**
   * Accepts an invitation to join a business using a token.
   *
   * @example
   * ```ts
   * const response = await client.v1.invitations.accept({
   *   token: 'token',
   * });
   * ```
   */
  accept(params: InvitationAcceptParams, options?: RequestOptions): APIPromise<InvitationAcceptResponse> {
    const { token } = params;
    return this._client.post('/api/v1/invitations/accept', { query: { token }, ...options });
  }
}

export interface InvitationAcceptResponse {
  /**
   * ID of the business the user has joined
   */
  businessId?: string;

  /**
   * Success message
   */
  message?: string;

  /**
   * Role assigned to the user in the business
   */
  role?: 'COLLABORATOR' | 'EMPLOYEE';
}

export interface InvitationAcceptParams {
  /**
   * Token to validate the invitation
   */
  token: string;
}

export declare namespace Invitations {
  export {
    type InvitationAcceptResponse as InvitationAcceptResponse,
    type InvitationAcceptParams as InvitationAcceptParams,
  };
}
