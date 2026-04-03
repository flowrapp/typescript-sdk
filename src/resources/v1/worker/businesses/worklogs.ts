// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as BusinessesAPI from './businesses';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

/**
 * Worker-facing endpoints for clock-in/out and work history views. These endpoints are scoped to the authenticated worker's own data.
 */
export class Worklogs extends APIResource {
  /**
   * Records the end of an active work session for the authenticated worker.
   * Pass-through to the main API.
   *
   * @example
   * ```ts
   * const session =
   *   await client.v1.worker.businesses.worklogs.clockOut(0, {
   *     businessId: 0,
   *   });
   * ```
   */
  clockOut(
    worklogID: number,
    params: WorklogClockOutParams,
    options?: RequestOptions,
  ): APIPromise<BusinessesAPI.Session> {
    const { businessId, ...body } = params;
    return this._client.put(path`/api/v1/worker/businesses/${businessId}/worklogs/${worklogID}/clock-out`, {
      body,
      ...options,
    });
  }
}

export interface WorklogClockOutParams {
  /**
   * Path param: ID of the business
   */
  businessId: number;

  /**
   * Body param: Optional clock-out timestamp. Server uses current time if omitted.
   */
  clockOut?: string;
}

export declare namespace Worklogs {
  export { type WorklogClockOutParams as WorklogClockOutParams };
}
