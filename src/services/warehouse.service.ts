import { Injectable, Inject, Optional } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';

import { DRIVER_TYPE, WarehouseConfig } from './../models';
import { LocalForageToken, WarehouseConfigToken } from './../tokens';

/**
 * The primary storage service. This is a wrapper around localForage.
 * The endpoints provided by localForage are converted to observables.
 * 
 * @export
 * @class Warehouse
 */
@Injectable()
export class Warehouse {

  constructor(
    @Inject(LocalForageToken) private _localForage: any,
    @Inject(WarehouseConfigToken) private _config: WarehouseConfig
  ) {
    this._initLocalForageConfig();
    this._initLocalForageDriver();
  }

  /**
   * Gets an item from the storage library and supplies the result to a callback.
   * If the key does not exist, getItem() will return null.
   *
   * Even if undefined is saved, null will be returned by getItem(). This is due to a
   * limitation in localStorage, and for compatibility reasons localForage cannot
   * store the value undefined.
   *
   * Warehouse.get('key').subscribe(
   *   (item) => {
   *     // do something with item
   *   },
   *   (error) => {
   *     // handle the error
   *   }
   * );
   * 
   * @param {string} key
   * @returns {Observable < any >}
   * 
   * @memberOf Warehouse
   */
  public get(key: string): Observable < any > {
    let promise: Promise < any > = this._localForage.getItem(key);
    return Observable.fromPromise(promise);
  }

  /**
   * Saves data to the offline store. You can store the following types of JavaScript objects:
   *   - Array
   *   - ArrayBuffer
   *   - Blob
   *   - Float32Array
   *   - Float64Array
   *   - Int8Array
   *   - Int16Array
   *   - Int32Array
   *   - Number
   *   - Object
   *   - Uint8Array
   *   - Uint8ClampedArray
   *   - Uint16Array
   *   - Uint32Array
   *   - String
   *
   * When using localStorage and WebSQL backends, binary data will be serialized
   * before being saved (and retrieved). This serialization will incur a size
   * increase when binary data is saved.
   *
   * Warehouse.set('key', value).subscribe(
   *   (item) => {
   *     // do something with newly saved item
   *   },
   *   (error) => {
   *     // handle the error
   *   }
   * );
   * 
   * @param {string} key
   * @param {*} value
   * @returns {Observable<any>}
   * 
   * @memberOf Warehouse
   */
  public set(key: string, value: any): Observable<any> {
    let promise: Promise < any > = this._localForage.setItem(key, value);
    return Observable.fromPromise(promise);
  }

  /**
   * Removes the value of a key from the offline store.
   * 
   * @param {string} key
   * @returns {Observable < any >}
   * 
   * @memberOf Warehouse
   */
  public remove(key: string): Observable < any > {
    let promise: Promise < any > = this._localForage.removeItem(key);
    return Observable.fromPromise(promise);
  }

  /**
   * USE WITH CAUTION:
   * Removes every key from the database, returning it to a blank slate.
   * 
   * @returns {(Observable < boolean | Error >)}
   * 
   * @memberOf Warehouse
   */
  public destroy(): Observable < boolean | Error > {
    let promise: Promise < any > = this._localForage.clear();
    return Observable.fromPromise(promise);
  }

  /**
   * Gets the number of keys in the offline store (i.e. its “length”).
   * 
   * @returns {Observable < number >}
   * 
   * @memberOf Warehouse
   */
  public count(): Observable < number > {
    let promise: Promise < any > = this._localForage.length();
    return Observable.fromPromise(promise);
  }

  /**
   * Get the name of a key based on its ID.
   *
   * This method is inherited from the localStorage API, but is acknowledged to be kinda weird.
   * 
   * @param {number} index
   * @returns {Observable < string >}
   * 
   * @memberOf Warehouse
   */
  public key(index: number): Observable < string > {
    let promise: Promise < any > = this._localForage.key(index);
    return Observable.fromPromise(promise);
  }

  /**
   * Get the list of all keys in the datastore.
   * 
   * @returns {Observable < string[] >}
   * 
   * @memberOf Warehouse
   */
  public keys(): Observable < string[] > {
    let promise: Promise < any > = this._localForage.keys();
    return Observable.fromPromise(promise);
  }

  /**
   * 
   * 
   * @private
   * 
   * @memberOf Warehouse
   */
  private _initLocalForageConfig(): void {
    this._localForage.config({
      name        : this._config.name,
      version     : this._config.version,
      storeName   : this._config.storeName,
      description : this._config.description
    });
  }

  /**
   * 
   * 
   * @private
   * 
   * @memberOf Warehouse
   */
  private _initLocalForageDriver(): void {
    switch (this._config.driver) {
      case DRIVER_TYPE.INDEXEDDB:
        this._localForage.setDriver(this._localForage.INDEXEDDB);
        break;
      case DRIVER_TYPE.WEBSQL:
        this._localForage.setDriver(this._localForage.WEBSQL);
        break;
      case DRIVER_TYPE.LOCALSTORAGE:
        this._localForage.setDriver(this._localForage.LOCALSTORAGE);
        break;
      // case DRIVER_TYPE.INMEMORY:
      //   this.localForage.defineDriver(memoryStorageDriver)
      //     .then(() => this.localForage.setDriver(memoryStorageDriver._driver));
      //   break;
      default:
        this._localForage.setDriver([
          this._localForage.INDEXEDDB,
          this._localForage.WEBSQL,
          this._localForage.LOCALSTORAGE
        ]);
    }
  }

}
