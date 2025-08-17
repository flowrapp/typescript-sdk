// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Invitations extends APIResource {
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
}

export interface InvitationAcceptParams {
  /**
   * Token to validate the invitation
   */
  token: string;
}

export declare namespace Invitations {
  export { type InvitationAcceptParams as InvitationAcceptParams };
}
