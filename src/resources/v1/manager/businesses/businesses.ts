// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as ExportAPI from './export';
import { Export, ExportWeeklyTimesheetParams } from './export';
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
import * as InvitationsAPI from './invitations';
import {
  Invitation,
  InvitationCreateParams,
  InvitationDeleteParams,
  InvitationListParams,
  InvitationListResponse,
  Invitations,
} from './invitations';
import * as WorkerBusinessesAPI from '../../worker/businesses/businesses';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

/**
 * Manager-facing endpoints for business oversight, worker management, work history reporting, invitation management, and timesheet export.
 */
export class Businesses extends APIResource {
  history: HistoryAPI.History = new HistoryAPI.History(this._client);
  invitations: InvitationsAPI.Invitations = new InvitationsAPI.Invitations(this._client);
  export: ExportAPI.Export = new ExportAPI.Export(this._client);

  /**
   * Returns the manager's business dashboard with aggregate statistics. Includes the
   * total number of businesses, total workers across all businesses, and a summary
   * of each business with its worker count.
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.manager.businesses.dashboard();
   * ```
   */
  dashboard(options?: RequestOptions): APIPromise<BusinessDashboardResponse> {
    return this._client.get('/api/v1/manager/businesses', options);
  }

  /**
   * Returns the list of workers for a specific business managed by the authenticated
   * user.
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.manager.businesses.listWorkers(0);
   * ```
   */
  listWorkers(businessID: number, options?: RequestOptions): APIPromise<BusinessListWorkersResponse> {
    return this._client.get(path`/api/v1/manager/businesses/${businessID}/workers`, options);
  }

  /**
   * Updates the clock-in and/or clock-out times of an existing worklog. This is a
   * manager-only operation for correcting worker time entries.
   *
   * @example
   * ```ts
   * const session =
   *   await client.v1.manager.businesses.updateWorklog(0, {
   *     businessId: 0,
   *   });
   * ```
   */
  updateWorklog(
    worklogID: number,
    params: BusinessUpdateWorklogParams,
    options?: RequestOptions,
  ): APIPromise<WorkerBusinessesAPI.Session> {
    const { businessId, ...body } = params;
    return this._client.put(path`/api/v1/manager/businesses/${businessId}/worklogs/${worklogID}`, {
      body,
      ...options,
    });
  }
}

/**
 * Manager dashboard with aggregate business statistics
 */
export interface BusinessDashboardResponse {
  /**
   * List of managed businesses with summary info
   */
  businesses: Array<BusinessDashboardResponse.Business>;

  /**
   * Total number of businesses managed by this user
   */
  totalBusinesses: number;

  /**
   * Total number of workers across all managed businesses
   */
  totalWorkers: number;
}

export namespace BusinessDashboardResponse {
  /**
   * Summary information for a business in the manager dashboard
   */
  export interface Business {
    /**
     * Unique identifier for the business
     */
    id: number;

    /**
     * City where the business is located
     */
    city: string;

    /**
     * Name of the business
     */
    name: string;

    /**
     * Number of workers in this business
     */
    workerCount: number;
  }
}

/**
 * List of workers for a specific business
 */
export interface BusinessListWorkersResponse {
  /**
   * Total number of workers in this business
   */
  totalWorkers: number;

  /**
   * List of workers
   */
  workers: Array<BusinessListWorkersResponse.Worker>;
}

export namespace BusinessListWorkersResponse {
  /**
   * Worker information within a business context
   */
  export interface Worker {
    /**
     * Email address of the worker
     */
    email: string;

    /**
     * Display name of the worker
     */
    name: string;

    /**
     * Unique identifier of the worker
     */
    userId: number;
  }
}

export interface BusinessUpdateWorklogParams {
  /**
   * Path param: ID of the business
   */
  businessId: number;

  /**
   * Body param: Updated clock-in timestamp
   */
  clockIn?: string;

  /**
   * Body param: Updated clock-out timestamp (null to clear)
   */
  clockOut?: string | null;
}

Businesses.History = History;
Businesses.Invitations = Invitations;
Businesses.Export = Export;

export declare namespace Businesses {
  export {
    type BusinessDashboardResponse as BusinessDashboardResponse,
    type BusinessListWorkersResponse as BusinessListWorkersResponse,
    type BusinessUpdateWorklogParams as BusinessUpdateWorklogParams,
  };

  export {
    History as History,
    type HistoryDayResponse as HistoryDayResponse,
    type HistoryMonthResponse as HistoryMonthResponse,
    type HistoryWeekResponse as HistoryWeekResponse,
    type HistoryDayParams as HistoryDayParams,
    type HistoryMonthParams as HistoryMonthParams,
    type HistoryWeekParams as HistoryWeekParams,
  };

  export {
    Invitations as Invitations,
    type Invitation as Invitation,
    type InvitationListResponse as InvitationListResponse,
    type InvitationCreateParams as InvitationCreateParams,
    type InvitationListParams as InvitationListParams,
    type InvitationDeleteParams as InvitationDeleteParams,
  };

  export { Export as Export, type ExportWeeklyTimesheetParams as ExportWeeklyTimesheetParams };
}
