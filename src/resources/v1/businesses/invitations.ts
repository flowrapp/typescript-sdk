// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Invitations extends APIResource {
  /**
   * Creates a new invitation to join a business with a specified role.
   *
   * @example
   * ```ts
   * const invitationResponse =
   *   await client.v1.businesses.invitations.create(
   *     'businessId',
   *     { email: 'invitee@example.com', role: 'COLLABORATOR' },
   *   );
   * ```
   */
  create(
    businessID: string,
    body: InvitationCreateParams,
    options?: RequestOptions,
  ): APIPromise<InvitationResponse> {
    return this._client.post(path`/api/v1/businesses/${businessID}/invitations`, { body, ...options });
  }

  /**
   * Retrieves a list of all pending invitations for the specified business.
   *
   * @example
   * ```ts
   * const invitationResponses =
   *   await client.v1.businesses.invitations.list('businessId');
   * ```
   */
  list(
    businessID: string,
    query: InvitationListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<InvitationListResponse> {
    return this._client.get(path`/api/v1/businesses/${businessID}/invitations`, { query, ...options });
  }

  /**
   * Deletes an existing invitation to join a business.
   *
   * @example
   * ```ts
   * await client.v1.businesses.invitations.delete(
   *   'invitationId',
   *   { businessId: 'businessId' },
   * );
   * ```
   */
  delete(invitationID: string, params: InvitationDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { businessId } = params;
    return this._client.delete(path`/api/v1/businesses/${businessId}/invitations/${invitationID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

/**
 * Response containing invitation details
 */
export interface InvitationResponse {
  /**
   * Unique identifier for the invitation
   */
  id: string;

  /**
   * Date and time when the invitation was created
   */
  createdAt: string;

  /**
   * Email address of the invitee
   */
  email: string;

  /**
   * Date and time when the invitation expires
   */
  expiresAt: string;

  /**
   * Role assigned to the invitee
   */
  role: 'COLLABORATOR' | 'EMPLOYEE';

  /**
   * Status of the invitation
   */
  status: 'PENDING' | 'ACCEPTED' | 'DECLINED' | 'EXPIRED';
}

export type InvitationListResponse = Array<InvitationResponse>;

export interface InvitationCreateParams {
  /**
   * Email address of the invitee
   */
  email: string;

  /**
   * Role to assign to the invitee
   */
  role: 'COLLABORATOR' | 'EMPLOYEE';
}

export interface InvitationListParams {
  /**
   * Filter invitations by status
   */
  status?: 'PENDING' | 'ACCEPTED' | 'DECLINED' | 'EXPIRED';
}

export interface InvitationDeleteParams {
  /**
   * Unique identifier of the business
   */
  businessId: string;
}

export declare namespace Invitations {
  export {
    type InvitationResponse as InvitationResponse,
    type InvitationListResponse as InvitationListResponse,
    type InvitationCreateParams as InvitationCreateParams,
    type InvitationListParams as InvitationListParams,
    type InvitationDeleteParams as InvitationDeleteParams,
  };
}
