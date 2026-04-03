// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as BusinessesAPI from '../../worker/businesses/businesses';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

/**
 * Manager-facing endpoints for business oversight, worker management, work history reporting, invitation management, and timesheet export.
 */
export class History extends APIResource {
  /**
   * Returns all workers' sessions for a specific day in a business. Shows each
   * worker's individual clock-in/clock-out sessions and their daily total.
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.manager.businesses.history.day(0);
   * ```
   */
  day(
    businessID: number,
    query: HistoryDayParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<HistoryDayResponse> {
    return this._client.get(path`/api/v1/manager/businesses/${businessID}/history/day`, {
      query,
      ...options,
    });
  }

  /**
   * Returns a monthly calendar view for a business with day-level totals and worker
   * counts. No session-level detail. Use the day history endpoint to drill into a
   * specific day.
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.manager.businesses.history.month(0);
   * ```
   */
  month(
    businessID: number,
    query: HistoryMonthParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<HistoryMonthResponse> {
    return this._client.get(path`/api/v1/manager/businesses/${businessID}/history/month`, {
      query,
      ...options,
    });
  }

  /**
   * Returns a weekly summary for a business, broken down by day with per-worker
   * totals for each day. Use the day history endpoint for session-level detail.
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.manager.businesses.history.week(0);
   * ```
   */
  week(
    businessID: number,
    query: HistoryWeekParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<HistoryWeekResponse> {
    return this._client.get(path`/api/v1/manager/businesses/${businessID}/history/week`, {
      query,
      ...options,
    });
  }
}

/**
 * All workers' sessions for a specific day in a business
 */
export interface HistoryDayResponse {
  /**
   * The date of this history entry
   */
  date: string;

  /**
   * Total seconds worked by all workers on this date
   */
  totalSeconds: number;

  /**
   * Number of workers who worked on this date
   */
  totalWorkers: number;

  /**
   * Per-worker breakdown with session details
   */
  workers: Array<HistoryDayResponse.Worker>;
}

export namespace HistoryDayResponse {
  /**
   * A single worker's sessions for a day
   */
  export interface Worker {
    /**
     * Display name of the worker
     */
    name: string;

    /**
     * Individual work sessions
     */
    sessions: Array<BusinessesAPI.Session>;

    /**
     * Total seconds worked by this worker on this day
     */
    totalSeconds: number;

    /**
     * Unique identifier of the worker
     */
    userId: number;
  }
}

/**
 * Monthly work history calendar for a business. Returns day-level totals with
 * worker counts (no session detail).
 */
export interface HistoryMonthResponse {
  /**
   * Per-day summary for the month
   */
  days: Array<HistoryMonthResponse.Day>;

  /**
   * Year and month in YYYY-MM format
   */
  month: string;

  /**
   * Total seconds worked by all workers in this month
   */
  totalSeconds: number;

  /**
   * Total number of work sessions in this month
   */
  totalSessions: number;
}

export namespace HistoryMonthResponse {
  /**
   * A single day within a manager month view
   */
  export interface Day {
    /**
     * The date
     */
    date: string;

    /**
     * Total seconds worked by all workers on this day
     */
    totalSeconds: number;

    /**
     * Number of workers who worked on this day
     */
    workerCount: number;
  }
}

/**
 * Weekly work history for a business with per-day and per-worker totals
 */
export interface HistoryWeekResponse {
  /**
   * Per-day breakdown with worker-level totals
   */
  days: Array<HistoryWeekResponse.Day>;

  /**
   * Total seconds worked by all workers in this week
   */
  totalSeconds: number;

  /**
   * ISO 8601 week identifier
   */
  week: string;
}

export namespace HistoryWeekResponse {
  /**
   * A single day within a manager week view, showing per-worker totals
   */
  export interface Day {
    /**
     * The date
     */
    date: string;

    /**
     * Total seconds worked by all workers on this day
     */
    totalSeconds: number;

    /**
     * Per-worker totals for this day (no session detail)
     */
    workers: Array<Day.Worker>;
  }

  export namespace Day {
    /**
     * A worker's total for a single day in the week view
     */
    export interface Worker {
      /**
       * Display name of the worker
       */
      name: string;

      /**
       * Total seconds worked by this worker on this day
       */
      totalSeconds: number;

      /**
       * Unique identifier of the worker
       */
      userId: number;
    }
  }
}

export interface HistoryDayParams {
  /**
   * Date to view (YYYY-MM-DD). Defaults to today.
   */
  date?: string;
}

export interface HistoryMonthParams {
  /**
   * Year and month (YYYY-MM). Defaults to current month.
   */
  month?: string;
}

export interface HistoryWeekParams {
  /**
   * ISO 8601 week (YYYY-Www). Defaults to current week.
   */
  week?: string;
}

export declare namespace History {
  export {
    type HistoryDayResponse as HistoryDayResponse,
    type HistoryMonthResponse as HistoryMonthResponse,
    type HistoryWeekResponse as HistoryWeekResponse,
    type HistoryDayParams as HistoryDayParams,
    type HistoryMonthParams as HistoryMonthParams,
    type HistoryWeekParams as HistoryWeekParams,
  };
}
