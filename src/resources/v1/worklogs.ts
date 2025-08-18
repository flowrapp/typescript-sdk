// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as BusinessesWorklogsAPI from './businesses/worklogs';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Worklogs extends APIResource {
  /**
   * Retrieves a specific worklog by its unique identifier.
   *
   * @example
   * ```ts
   * const workLogResponse = await client.v1.worklogs.retrieve(
   *   0,
   * );
   * ```
   */
  retrieve(worklogID: number, options?: RequestOptions): APIPromise<BusinessesWorklogsAPI.WorkLogResponse> {
    return this._client.get(path`/api/v1/worklogs/${worklogID}`, options);
  }

  /**
   * Updates the clock-in and clock-out times for a specific worklog.
   *
   * @example
   * ```ts
   * const workLogResponse = await client.v1.worklogs.update(0);
   * ```
   */
  update(
    worklogID: number,
    body: WorklogUpdateParams,
    options?: RequestOptions,
  ): APIPromise<BusinessesWorklogsAPI.WorkLogResponse> {
    return this._client.put(path`/api/v1/worklogs/${worklogID}`, { body, ...options });
  }

  /**
   * Retrieves a collection of worklog records for the authenticated user.
   *
   * @example
   * ```ts
   * const workLogResponses = await client.v1.worklogs.list();
   * ```
   */
  list(
    query: WorklogListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<WorklogListResponse> {
    return this._client.get('/api/v1/worklogs', { query, ...options });
  }
}

export type WorklogListResponse = Array<BusinessesWorklogsAPI.WorkLogResponse>;

export interface WorklogUpdateParams {
  /**
   * Timestamp for clock-in
   */
  clockIn?: string;

  /**
   * Timestamp for clock-out
   */
  clockOut?: string | null;
}

export interface WorklogListParams {
  /**
   * Filter by business ID
   */
  businessId?: number;

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
}

export declare namespace Worklogs {
  export {
    type WorklogListResponse as WorklogListResponse,
    type WorklogUpdateParams as WorklogUpdateParams,
    type WorklogListParams as WorklogListParams,
  };
}
