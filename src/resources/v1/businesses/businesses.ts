// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as BusinessesAPI from './businesses';
import * as InvitationsAPI from './invitations';
import {
  InvitationCreateParams,
  InvitationDeleteParams,
  InvitationListParams,
  InvitationListResponse,
  InvitationResponse,
  Invitations,
} from './invitations';
import * as TimesheetsAPI from './timesheets';
import {
  TimesheetRetrieveWeeklyHoursParams,
  TimesheetRetrieveWeeklyHoursResponse,
  Timesheets,
} from './timesheets';
import * as WorklogsAPI from './worklogs';
import {
  WorkLogResponse,
  WorklogClockInParams,
  WorklogClockOutParams,
  WorklogListParams,
  WorklogListResponse,
  Worklogs,
} from './worklogs';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Businesses extends APIResource {
  worklogs: WorklogsAPI.Worklogs = new WorklogsAPI.Worklogs(this._client);
  invitations: InvitationsAPI.Invitations = new InvitationsAPI.Invitations(this._client);
  timesheets: TimesheetsAPI.Timesheets = new TimesheetsAPI.Timesheets(this._client);

  /**
   * Retrieves a comprehensive list of all businesses that are associated with the
   * currently authenticated user, including the role of the current user in each
   * business.
   *
   * @example
   * ```ts
   * const businesses = await client.v1.businesses.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<BusinessListResponse> {
    return this._client.get('/api/v1/businesses', options);
  }

  /**
   * Retrieves a paginated list of users associated with the specified business. Can
   * be filtered by role.
   *
   * @example
   * ```ts
   * const response = await client.v1.businesses.listUsers(0);
   * ```
   */
  listUsers(
    businessID: number,
    query: BusinessListUsersParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BusinessListUsersResponse> {
    return this._client.get(path`/api/v1/businesses/${businessID}/users`, { query, ...options });
  }
}

/**
 * Geographic location information
 */
export interface Location {
  /**
   * Area size in square units
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

export type BusinessListResponse = Array<BusinessListResponse.BusinessListResponseItem>;

export namespace BusinessListResponse {
  /**
   * Business information with identifier
   */
  export interface BusinessListResponseItem {
    /**
     * Unique identifier for the business
     */
    id: number;

    /**
     * Address of the business
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
    location: BusinessesAPI.Location;

    /**
     * Name of the business
     */
    name: string;

    /**
     * Town of the business
     */
    town: string;

    /**
     * Role of the current authenticated user in the business
     */
    userRole: 'OWNER' | 'MANAGER' | 'EMPLOYEE';

    /**
     * IANA time zone identifier for the business (e.g., America/Caracas)
     */
    zone: string;
  }
}

export type BusinessListUsersResponse = Array<BusinessListUsersResponse.BusinessListUsersResponseItem>;

export namespace BusinessListUsersResponse {
  /**
   * User information associated with a business
   */
  export interface BusinessListUsersResponseItem {
    /**
     * Role of the user in the business
     */
    role: 'OWNER' | 'MANAGER' | 'EMPLOYEE';

    /**
     * Unique identifier for the user
     */
    userId: number;

    /**
     * Username of the user
     */
    username: string;
  }
}

export interface BusinessListUsersParams {
  /**
   * Filter users by role
   */
  role?: 'OWNER' | 'MANAGER' | 'EMPLOYEE';
}

Businesses.Worklogs = Worklogs;
Businesses.Invitations = Invitations;
Businesses.Timesheets = Timesheets;

export declare namespace Businesses {
  export {
    type Location as Location,
    type BusinessListResponse as BusinessListResponse,
    type BusinessListUsersResponse as BusinessListUsersResponse,
    type BusinessListUsersParams as BusinessListUsersParams,
  };

  export {
    Worklogs as Worklogs,
    type WorkLogResponse as WorkLogResponse,
    type WorklogListResponse as WorklogListResponse,
    type WorklogListParams as WorklogListParams,
    type WorklogClockInParams as WorklogClockInParams,
    type WorklogClockOutParams as WorklogClockOutParams,
  };

  export {
    Invitations as Invitations,
    type InvitationResponse as InvitationResponse,
    type InvitationListResponse as InvitationListResponse,
    type InvitationCreateParams as InvitationCreateParams,
    type InvitationListParams as InvitationListParams,
    type InvitationDeleteParams as InvitationDeleteParams,
  };

  export {
    Timesheets as Timesheets,
    type TimesheetRetrieveWeeklyHoursResponse as TimesheetRetrieveWeeklyHoursResponse,
    type TimesheetRetrieveWeeklyHoursParams as TimesheetRetrieveWeeklyHoursParams,
  };
}
