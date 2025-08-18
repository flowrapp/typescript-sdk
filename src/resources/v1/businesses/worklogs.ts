// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Worklogs extends APIResource {
  /**
   * Retrieves a collection of worklog records for a specific business, filtered by
   * various time-based and user criteria.
   *
   * @example
   * ```ts
   * const workLogResponses =
   *   await client.v1.businesses.worklogs.list(0);
   * ```
   */
  list(
    businessID: number,
    query: WorklogListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<WorklogListResponse> {
    return this._client.get(path`/api/v1/businesses/${businessID}/worklogs`, { query, ...options });
  }

  /**
   * Records the start time of a work session for the authenticated user at a
   * specific business location.
   *
   * @example
   * ```ts
   * const workLogResponse =
   *   await client.v1.businesses.worklogs.clockIn(0);
   * ```
   */
  clockIn(
    businessID: number,
    body: WorklogClockInParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<WorkLogResponse> {
    return this._client.post(path`/api/v1/businesses/${businessID}/worklogs/clock-in`, { body, ...options });
  }
}

/**
 * Response object containing worklog information
 */
export interface WorkLogResponse {
  /**
   * Unique identifier for the worklog
   */
  id: number;

  /**
   * Timestamp when the user clocked in
   */
  clockIn: string;

  /**
   * Identifier of the user who created the worklog
   */
  userId: number;

  /**
   * Timestamp when the user clocked out (null if not clocked out yet)
   */
  clockOut?: string | null;
}

export type WorklogListResponse = Array<WorkLogResponse>;

export interface WorklogListParams {
  /**
   * Specific date for filtering (alternative to from/to, format YYYY-MM-DD)
   */
  date?: string;

  /**
   * Start date for filtering (format YYYY-MM-DD)
   */
  from?: string;

  /**
   * End date for filtering (format YYYY-MM-DD)
   */
  to?: string;

  /**
   * Filter by user ID
   */
  userId?: number;
}

export interface WorklogClockInParams {
  /**
   * Timestamp for clock-in (optional, server uses current time if omitted)
   */
  clockIn?: string;
}

export declare namespace Worklogs {
  export {
    type WorkLogResponse as WorkLogResponse,
    type WorklogListResponse as WorklogListResponse,
    type WorklogListParams as WorklogListParams,
    type WorklogClockInParams as WorklogClockInParams,
  };
}
