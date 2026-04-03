// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as BusinessesAPI from './businesses/businesses';
import {
  BusinessDashboardResponse,
  BusinessListWorkersResponse,
  BusinessUpdateWorklogParams,
  Businesses,
} from './businesses/businesses';

export class Manager extends APIResource {
  businesses: BusinessesAPI.Businesses = new BusinessesAPI.Businesses(this._client);
}

Manager.Businesses = Businesses;

export declare namespace Manager {
  export {
    Businesses as Businesses,
    type BusinessDashboardResponse as BusinessDashboardResponse,
    type BusinessListWorkersResponse as BusinessListWorkersResponse,
    type BusinessUpdateWorklogParams as BusinessUpdateWorklogParams,
  };
}
