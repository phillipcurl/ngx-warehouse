import { Injectable, Inject, Optional } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';

import { LocalForageItem, STORAGE_TYPE, IStorageConfig, StorageConfig } from './../models';
import { LocalForageToken } from './../tokens';

import { isNil } from './../util';

@Injectable()
export class Storage {

  constructor(
    @Inject(LocalForageToken) private localForage: any,
    public config: StorageConfig
  ) {

    if (isNil(this.config)) {
      this.config = {
        driver      : STORAGE_TYPE.INDEXDB,
        name        : 'ngx-storage',
        version     : 1.0,
        storeName   : 'keyvaluepairs',
        description : 'some description'
      };
    }

    this.localForage.config({
      name        : this.config.name,
      version     : this.config.version,
      storeName   : this.config.storeName,
      description : this.config.description
    });

    switch (this.config.driver) {
      case STORAGE_TYPE.INDEXDB:
        this.localForage.setDriver(this.localForage.INDEXDB);
        break;
      case STORAGE_TYPE.WEBSQL:
        this.localForage.setDriver(this.localForage.WEBSQL);
        break;
      case STORAGE_TYPE.LOCALSTORAGE:
        this.localForage.setDriver(this.localForage.LOCALSTORAGE);
        break;
      // case STORAGE_TYPE.INMEMORY:
      //   this.localForage.defineDriver(memoryStorageDriver)
      //     .then(() => this.localForage.setDriver(memoryStorageDriver._driver));
      //   break;
      default:
        this.localForage.setDriver([
          this.localForage.INDEXEDDB,
          this.localForage.WEBSQL,
          this.localForage.LOCALSTORAGE
        ]);
    }
  }

  public getItem(key: string): Observable < any > {
    let promise: Promise < any > = this.localForage.getItem(key);

    return Observable.fromPromise(promise);
  }

  public setItem(item: LocalForageItem): Observable<any> {
    console.log('config currently looks like this: ', this.config);
    let promise: Promise < any > = this.localForage.setItem(item.key, item.value);

    return Observable.fromPromise(promise);
  }

  public removeItem(key: string): Observable < any > {
    let promise: Promise < any > = this.localForage.removeItem(key);

    return Observable.fromPromise(promise);
  }

  public clear(): Observable < any > {
    let promise: Promise < any > = this.localForage.clear();

    return Observable.fromPromise(promise);
  }

  public length(): Observable < number > {
    let promise: Promise < any > = this.localForage.length();

    return Observable.fromPromise(promise);
  }

  public key(index: number): Observable < string > {
    let promise: Promise < any > = this.localForage.key(index);

    return Observable.fromPromise(promise);
  }

  public keys(): Observable < string[] > {
    let promise: Promise < any > = this.localForage.keys();

    return Observable.fromPromise(promise);
  }

}
