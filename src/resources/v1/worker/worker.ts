// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as BusinessesAPI from './businesses/businesses';
import {
  BusinessClockInParams,
  BusinessClockViewParams,
  BusinessClockViewResponse,
  BusinessListResponse,
  Businesses,
  Session,
} from './businesses/businesses';

export class Worker extends APIResource {
  businesses: BusinessesAPI.Businesses = new BusinessesAPI.Businesses(this._client);
}

Worker.Businesses = Businesses;

export declare namespace Worker {
  export {
    Businesses as Businesses,
    type Session as Session,
    type BusinessListResponse as BusinessListResponse,
    type BusinessClockViewResponse as BusinessClockViewResponse,
    type BusinessClockInParams as BusinessClockInParams,
    type BusinessClockViewParams as BusinessClockViewParams,
  };
}
