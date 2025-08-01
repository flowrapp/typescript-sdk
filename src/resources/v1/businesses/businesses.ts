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
import { Timesheets } from './timesheets';
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
   * const response = await client.v1.businesses.listUsers(
   *   'businessId',
   * );
   * ```
   */
  listUsers(
    businessID: string,
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
     * Geographic location information
     */
    location: BusinessesAPI.Location;

    /**
     * Name of the business
     */
    name: string;

    /**
     * Role of the current authenticated user in the business
     */
    userRole: 'OWNER' | 'COLLABORATOR' | 'EMPLOYEE';
  }
}

export interface BusinessListUsersResponse {
  content: Array<BusinessListUsersResponse.Content>;

  /**
   * Current page number (0-based)
   */
  page: number;

  /**
   * Size of the page
   */
  size: number;

  /**
   * Total number of elements across all pages
   */
  totalElements: number;

  /**
   * Total number of pages
   */
  totalPages: number;
}

export namespace BusinessListUsersResponse {
  /**
   * User information associated with a business
   */
  export interface Content {
    /**
     * Email address of the user
     */
    email: string;

    /**
     * Role of the user in the business
     */
    role: 'OWNER' | 'COLLABORATOR' | 'EMPLOYEE';

    /**
     * Unique identifier for the user
     */
    userId: string;

    /**
     * Username of the user
     */
    username: string;
  }
}

export interface BusinessListUsersParams {
  /**
   * Page number (0-based)
   */
  page?: number;

  /**
   * Filter users by role
   */
  role?: 'OWNER' | 'COLLABORATOR' | 'EMPLOYEE';

  /**
   * Page size
   */
  size?: number;
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

  export { Timesheets as Timesheets };
}
