// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

/**
 * Manager-facing endpoints for business oversight, worker management, work history reporting, invitation management, and timesheet export.
 */
export class Invitations extends APIResource {
  /**
   * Creates a new invitation for a person to join a business with a specified role.
   * An email will be sent to the invitee. Pass-through to the main API.
   *
   * @example
   * ```ts
   * const invitation =
   *   await client.v1.manager.businesses.invitations.create(0, {
   *     email: 'newworker@example.com',
   *     role: 'EMPLOYEE',
   *   });
   * ```
   */
  create(businessID: number, body: InvitationCreateParams, options?: RequestOptions): APIPromise<Invitation> {
    return this._client.post(path`/api/v1/manager/businesses/${businessID}/invitations`, {
      body,
      ...options,
    });
  }

  /**
   * Returns the list of invitations for a specific business, optionally filtered by
   * status.
   *
   * @example
   * ```ts
   * const invitations =
   *   await client.v1.manager.businesses.invitations.list(0);
   * ```
   */
  list(
    businessID: number,
    query: InvitationListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<InvitationListResponse> {
    return this._client.get(path`/api/v1/manager/businesses/${businessID}/invitations`, {
      query,
      ...options,
    });
  }

  /**
   * Deletes an existing invitation to join a business. Pass-through to the main API.
   *
   * @example
   * ```ts
   * await client.v1.manager.businesses.invitations.delete(0, {
   *   businessId: 0,
   * });
   * ```
   */
  delete(invitationID: number, params: InvitationDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { businessId } = params;
    return this._client.delete(path`/api/v1/manager/businesses/${businessId}/invitations/${invitationID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

/**
 * Invitation details
 */
export interface Invitation {
  /**
   * Unique identifier of the invitation
   */
  id: number;

  /**
   * When the invitation was created
   */
  createdAt: string;

  /**
   * Email address of the invitee
   */
  email: string;

  /**
   * When the invitation expires
   */
  expiresAt: string;

  /**
   * Role assigned to the invitee
   */
  role: 'OWNER' | 'MANAGER' | 'EMPLOYEE';

  /**
   * Current status of the invitation
   */
  status: 'PENDING' | 'ACCEPTED' | 'DECLINED' | 'EXPIRED';
}

export type InvitationListResponse = Array<Invitation>;

export interface InvitationCreateParams {
  /**
   * Email address of the person to invite
   */
  email: string;

  /**
   * Role to assign to the invitee
   */
  role: 'MANAGER' | 'EMPLOYEE';
}

export interface InvitationListParams {
  /**
   * Filter invitations by status
   */
  status?: 'PENDING' | 'ACCEPTED' | 'DECLINED' | 'EXPIRED';
}

export interface InvitationDeleteParams {
  /**
   * ID of the business
   */
  businessId: number;
}

export declare namespace Invitations {
  export {
    type Invitation as Invitation,
    type InvitationListResponse as InvitationListResponse,
    type InvitationCreateParams as InvitationCreateParams,
    type InvitationListParams as InvitationListParams,
    type InvitationDeleteParams as InvitationDeleteParams,
  };
}
