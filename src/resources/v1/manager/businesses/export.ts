// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

/**
 * Manager-facing endpoints for business oversight, worker management, work history reporting, invitation management, and timesheet export.
 */
export class Export extends APIResource {
  /**
   * Generates and downloads a PDF document containing the weekly timesheet for a
   * business. The PDF includes each worker's daily clock-in/clock-out times and
   * total hours for the specified week.
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.manager.businesses.export.weeklyTimesheet(
   *     0,
   *     { week: '2025-W31' },
   *   );
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  weeklyTimesheet(
    businessID: number,
    query: ExportWeeklyTimesheetParams,
    options?: RequestOptions,
  ): APIPromise<Response> {
    return this._client.get(path`/api/v1/manager/businesses/${businessID}/export/weekly-timesheet`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'application/pdf' }, options?.headers]),
      __binaryResponse: true,
    });
  }
}

export interface ExportWeeklyTimesheetParams {
  /**
   * ISO 8601 week to export (YYYY-Www)
   */
  week: string;
}

export declare namespace Export {
  export { type ExportWeeklyTimesheetParams as ExportWeeklyTimesheetParams };
}
