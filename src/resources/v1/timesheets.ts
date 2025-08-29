// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Timesheets extends APIResource {
  /**
   * Retrieves the weekly hours report for the authenticated user.
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.timesheets.retrieveWeeklyHours({
   *     businessId: 12,
   *     week: '2025-W31',
   *   });
   * ```
   */
  retrieveWeeklyHours(
    query: TimesheetRetrieveWeeklyHoursParams,
    options?: RequestOptions,
  ): APIPromise<TimesheetRetrieveWeeklyHoursResponse> {
    return this._client.get('/api/v1/timesheets/weekly-hours', { query, ...options });
  }
}

/**
 * Weekly hours report for users
 */
export interface TimesheetRetrieveWeeklyHoursResponse {
  /**
   * ID of the business
   */
  businessId: number;

  /**
   * End date of the week
   */
  endDate: string;

  /**
   * Start date of the week
   */
  startDate: string;

  /**
   * List of users with their hours
   */
  users: Array<TimesheetRetrieveWeeklyHoursResponse.User>;

  /**
   * ISO week format (YYYY-Www)
   */
  week: string;
}

export namespace TimesheetRetrieveWeeklyHoursResponse {
  /**
   * User hours information
   */
  export interface User {
    /**
     * Hours worked per day
     */
    dailyHours: { [key: string]: string };

    /**
     * Total hours worked in the week
     */
    totalHours: string;

    /**
     * ID of the user
     */
    userId: number;

    /**
     * Username of the user
     */
    username: string;
  }
}

export interface TimesheetRetrieveWeeklyHoursParams {
  /**
   * ID of the business to filter
   */
  businessId: number;

  /**
   * ISO week format (YYYY-Www)
   */
  week: string;
}

export declare namespace Timesheets {
  export {
    type TimesheetRetrieveWeeklyHoursResponse as TimesheetRetrieveWeeklyHoursResponse,
    type TimesheetRetrieveWeeklyHoursParams as TimesheetRetrieveWeeklyHoursParams,
  };
}
