// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as HistoryAPI from './history';
import {
  History,
  HistoryDayParams,
  HistoryDayResponse,
  HistoryMonthParams,
  HistoryMonthResponse,
  HistoryWeekParams,
  HistoryWeekResponse,
} from './history';
import * as WorklogsAPI from './worklogs';
import { WorklogClockOutParams, Worklogs } from './worklogs';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

/**
 * Worker-facing endpoints for clock-in/out and work history views. These endpoints are scoped to the authenticated worker's own data.
 */
export class Businesses extends APIResource {
  worklogs: WorklogsAPI.Worklogs = new WorklogsAPI.Worklogs(this._client);
  history: HistoryAPI.History = new HistoryAPI.History(this._client);

  /**
   * Returns the list of businesses the authenticated worker belongs to, including
   * full business details and the worker's role in each business.
   *
   * @example
   * ```ts
   * const businesses = await client.v1.worker.businesses.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<BusinessListResponse> {
    return this._client.get('/api/v1/worker/businesses', options);
  }

  /**
   * Records the start of a work session for the authenticated worker at the
   * specified business. Pass-through to the main API.
   *
   * @example
   * ```ts
   * const session = await client.v1.worker.businesses.clockIn(
   *   0,
   * );
   * ```
   */
  clockIn(
    businessID: number,
    body: BusinessClockInParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Session> {
    return this._client.post(path`/api/v1/worker/businesses/${businessID}/clock-in`, { body, ...options });
  }

  /**
   * Returns the worker's clock view for a given date (defaults to today). This is
   * the main aggregation endpoint that combines: today's completed sessions, the
   * currently active session (if clocked in), and running totals for the current
   * week and month.
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.worker.businesses.clockView(0);
   * ```
   */
  clockView(
    businessID: number,
    query: BusinessClockViewParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BusinessClockViewResponse> {
    return this._client.get(path`/api/v1/worker/businesses/${businessID}/clock`, { query, ...options });
  }
}

/**
 * A single work session (clock-in/clock-out pair)
 */
export interface Session {
  /**
   * Unique identifier of the worklog
   */
  id: number;

  /**
   * Timestamp when the user clocked in
   */
  clockIn: string;

  /**
   * Timestamp when the user clocked out (null if session is still active)
   */
  clockOut?: string | null;

  /**
   * Duration of the session in seconds (null if session is still active)
   */
  durationSeconds?: number | null;
}

export type BusinessListResponse = Array<BusinessListResponse.BusinessListResponseItem>;

export namespace BusinessListResponse {
  /**
   * Business information from the worker's perspective
   */
  export interface BusinessListResponseItem {
    /**
     * Unique identifier for the business
     */
    id: number;

    /**
     * Street address of the business
     */
    address: string;

    /**
     * City of the business
     */
    city: string;

    /**
     * Country of the business
     */
    country: string;

    /**
     * Geographic location information
     */
    location: BusinessListResponseItem.Location;

    /**
     * Name of the business
     */
    name: string;

    /**
     * Town of the business
     */
    town: string;

    /**
     * Role of the current user in this business
     */
    userRole: 'OWNER' | 'MANAGER' | 'EMPLOYEE';

    /**
     * IANA time zone identifier for the business
     */
    zone: string;
  }

  export namespace BusinessListResponseItem {
    /**
     * Geographic location information
     */
    export interface Location {
      /**
       * Geofence area radius in meters
       */
      area: number;

      /**
       * Latitude coordinate
       */
      latitude: number;

      /**
       * Longitude coordinate
       */
      longitude: number;
    }
  }
}

/**
 * Aggregated clock view for the worker's current day. Combines today's work
 * sessions, the currently active session (if any), and running totals for the week
 * and month.
 */
export interface BusinessClockViewResponse {
  /**
   * The date this clock view represents
   */
  date: string;

  /**
   * All completed work sessions for this date
   */
  sessions: Array<Session>;

  /**
   * Total seconds worked in the current calendar month
   */
  totalSecondsMonth: number;

  /**
   * Total seconds worked in the current ISO week
   */
  totalSecondsWeek: number;

  /**
   * A single work session (clock-in/clock-out pair)
   */
  activeWorklog?: Session | null;
}

export interface BusinessClockInParams {
  /**
   * Optional clock-in timestamp. Server uses current time if omitted.
   */
  clockIn?: string;
}

export interface BusinessClockViewParams {
  /**
   * Date to view (YYYY-MM-DD). Defaults to today.
   */
  date?: string;
}

Businesses.Worklogs = Worklogs;
Businesses.History = History;

export declare namespace Businesses {
  export {
    type Session as Session,
    type BusinessListResponse as BusinessListResponse,
    type BusinessClockViewResponse as BusinessClockViewResponse,
    type BusinessClockInParams as BusinessClockInParams,
    type BusinessClockViewParams as BusinessClockViewParams,
  };

  export { Worklogs as Worklogs, type WorklogClockOutParams as WorklogClockOutParams };

  export {
    History as History,
    type HistoryDayResponse as HistoryDayResponse,
    type HistoryMonthResponse as HistoryMonthResponse,
    type HistoryWeekResponse as HistoryWeekResponse,
    type HistoryDayParams as HistoryDayParams,
    type HistoryMonthParams as HistoryMonthParams,
    type HistoryWeekParams as HistoryWeekParams,
  };
}
