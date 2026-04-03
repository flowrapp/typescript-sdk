// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class Invitations extends APIResource {}

/**
 * Invitation details
 */
export interface InvitationResponse {
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

export declare namespace Invitations {
  export { type InvitationResponse as InvitationResponse };
}
