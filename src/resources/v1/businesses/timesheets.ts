// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Timesheets extends APIResource {
  /**
   * Generates and retrieves a comprehensive weekly hours report for users within a
   * specified business.
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.businesses.timesheets.retrieveWeeklyHours(
   *     'abc123',
   *     { week: '2025-W31' },
   *   );
   * ```
   */
  retrieveWeeklyHours(
    businessID: string,
    query: TimesheetRetrieveWeeklyHoursParams,
    options?: RequestOptions,
  ): APIPromise<TimesheetRetrieveWeeklyHoursResponse> {
    return this._client.get(path`/api/v1/businesses/businessIdtimesheets/weekly-hours`, {
      query,
      ...options,
    });
  }
}

/**
 * Weekly hours report for users
 */
export interface TimesheetRetrieveWeeklyHoursResponse {
  /**
   * ID of the business
   */
  businessId: string;

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
    dailyHours: { [key: string]: number };

    /**
     * Email of the user
     */
    email: string;

    /**
     * Total hours worked in the week
     */
    totalHours: number;

    /**
     * ID of the user
     */
    userId: string;

    /**
     * Username of the user
     */
    username: string;
  }
}

export interface TimesheetRetrieveWeeklyHoursParams {
  /**
   * ISO week format (YYYY-Www)
   */
  week: string;

  /**
   * ID of the user to filter by
   */
  userId?: string;
}

export declare namespace Timesheets {
  export {
    type TimesheetRetrieveWeeklyHoursResponse as TimesheetRetrieveWeeklyHoursResponse,
    type TimesheetRetrieveWeeklyHoursParams as TimesheetRetrieveWeeklyHoursParams,
  };
}
