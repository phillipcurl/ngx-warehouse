import { Injectable, Inject } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';

import { LocalForageItem } from './../models';
import { LocalForageToken } from './../tokens';

/**
 * A reactive wrapper around the localforage API. This allows us to inferface
 * with localforage using observables
 * 
 * @export
 * @class LocalForageService
 */
@Injectable()
export class LocalForageService {

  /**
   * Creates an instance of LocalForageService.
   * 
   * @param {*} localForage
   * 
   * @memberOf LocalForageService
   */
  constructor(
    @Inject(LocalForageToken) private localForage: any
  ) {
    // localForage.config({
    //   driver      : localForage.WEBSQL, // Force WebSQL; same as using setDriver()
    //   name        : 'myApp',
    //   version     : 1.0,
    //   size        : 4980736, // Size of database, in bytes. WebSQL-only for now.
    //   storeName   : 'keyvaluepairs', // Should be alphanumeric, with underscores.
    //   description : 'some description'
    // });
  }

  /**
   * Get a single object from localforage
   * 
   * @param {string} key
   * @returns {Observable < any >}
   * 
   * @memberOf LocalForageService
   */
  getItem(key: string): Observable < any > {
    let promise: Promise < any > = this.localForage.getItem(key);

    return Observable.fromPromise(promise);
  }

  /**
   * Set a single object in localforage
   * 
   * @param {LocalForageItem} item
   * @returns {Observable < any >} : The object saved to localforage
   * 
   * @memberOf LocalForageService
   */
  setItem(item: LocalForageItem): Observable < any > {
    let promise: Promise < any > = this.localForage.setItem(item.key, item.value);

    return Observable.fromPromise(promise);
  }

  /**
   * 
   * 
   * @param {string} key
   * @returns {Observable < any >}
   * 
   * @memberOf LocalForageService
   */
  removeItem(key: string): Observable < any > {
    let promise: Promise < any > = this.localForage.removeItem(key);

    return Observable.fromPromise(promise);
  }

  /**
   * 
   * 
   * @returns {Observable < any >}
   * 
   * @memberOf LocalForageService
   */
  clear(): Observable < any > {
    let promise: Promise < any > = this.localForage.clear();

    return Observable.fromPromise(promise);
  }

  /**
   * 
   * 
   * @returns {Observable < number >}
   * 
   * @memberOf LocalForageService
   */
  length(): Observable < number > {
    let promise: Promise < any > = this.localForage.length();

    return Observable.fromPromise(promise);
  }

  /**
   * 
   * 
   * @param {number} index
   * @returns {Observable < string >}
   * 
   * @memberOf LocalForageService
   */
  key(index: number): Observable < string > {
    let promise: Promise < any > = this.localForage.key(index);

    return Observable.fromPromise(promise);
  }

  /**
   * 
   * 
   * @returns {Observable < string[] >}
   * 
   * @memberOf LocalForageService
   */
  keys(): Observable < string[] > {
    let promise: Promise < any > = this.localForage.keys();

    return Observable.fromPromise(promise);
  }
}
