// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as BusinessesAPI from './businesses';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

/**
 * Worker-facing endpoints for clock-in/out and work history views. These endpoints are scoped to the authenticated worker's own data.
 */
export class History extends APIResource {
  /**
   * Returns the detailed work history for a specific day, including all individual
   * clock-in/clock-out sessions and total seconds worked.
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.worker.businesses.history.day(0);
   * ```
   */
  day(
    businessID: number,
    query: HistoryDayParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<HistoryDayResponse> {
    return this._client.get(path`/api/v1/worker/businesses/${businessID}/history/day`, { query, ...options });
  }

  /**
   * Returns a calendar view for a month with day-level totals only (no session
   * detail). Use the day history endpoint to drill into a specific day's sessions.
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.worker.businesses.history.month(0);
   * ```
   */
  month(
    businessID: number,
    query: HistoryMonthParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<HistoryMonthResponse> {
    return this._client.get(path`/api/v1/worker/businesses/${businessID}/history/month`, {
      query,
      ...options,
    });
  }

  /**
   * Returns the work history for an ISO week, broken down by day with individual
   * sessions per day. Includes total seconds and session count for the week.
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.worker.businesses.history.week(0);
   * ```
   */
  week(
    businessID: number,
    query: HistoryWeekParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<HistoryWeekResponse> {
    return this._client.get(path`/api/v1/worker/businesses/${businessID}/history/week`, {
      query,
      ...options,
    });
  }
}

/**
 * Detailed work history for a single day, including all individual sessions
 */
export interface HistoryDayResponse {
  /**
   * The date of this history entry
   */
  date: string;

  /**
   * Individual work sessions for this date
   */
  sessions: Array<BusinessesAPI.Session>;

  /**
   * Total seconds worked on this date
   */
  totalSeconds: number;
}

/**
 * Work history calendar for a month. Returns day-level totals only (no session
 * detail). Use the day history endpoint to drill into a specific day.
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
   * Total seconds worked in this month
   */
  totalSeconds: number;

  /**
   * Total number of work sessions in this month
   */
  totalSessions: number;
}

export namespace HistoryMonthResponse {
  /**
   * A single day within a month history (totals only, no session detail)
   */
  export interface Day {
    /**
     * The date
     */
    date: string;

    /**
     * Total seconds worked on this day
     */
    totalSeconds: number;
  }
}

/**
 * Work history summary for an ISO week, with per-day breakdown including sessions
 */
export interface HistoryWeekResponse {
  /**
   * Per-day breakdown for the week
   */
  days: Array<HistoryWeekResponse.Day>;

  /**
   * Total seconds worked in this week
   */
  totalSeconds: number;

  /**
   * Total number of work sessions in this week
   */
  totalSessions: number;

  /**
   * ISO 8601 week identifier
   */
  week: string;
}

export namespace HistoryWeekResponse {
  /**
   * A single day within a week history, including session details
   */
  export interface Day {
    /**
     * The date
     */
    date: string;

    /**
     * Work sessions for this day
     */
    sessions: Array<BusinessesAPI.Session>;

    /**
     * Total seconds worked on this day
     */
    totalSeconds: number;
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
