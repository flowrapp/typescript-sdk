// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as InvitationsAPI from './invitations';
import { InvitationResponse, Invitations } from './invitations';
import * as TimesheetsAPI from './timesheets';
import { Timesheets } from './timesheets';
import * as WorklogsAPI from './worklogs';
import { Worklogs } from './worklogs';

export class Businesses extends APIResource {
  worklogs: WorklogsAPI.Worklogs = new WorklogsAPI.Worklogs(this._client);
  invitations: InvitationsAPI.Invitations = new InvitationsAPI.Invitations(this._client);
  timesheets: TimesheetsAPI.Timesheets = new TimesheetsAPI.Timesheets(this._client);
}

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

Businesses.Worklogs = Worklogs;
Businesses.Invitations = Invitations;
Businesses.Timesheets = Timesheets;

export declare namespace Businesses {
  export { type Location as Location };

  export { Worklogs as Worklogs };

  export { Invitations as Invitations, type InvitationResponse as InvitationResponse };

  export { Timesheets as Timesheets };
}
