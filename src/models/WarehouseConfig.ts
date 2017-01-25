import { isNil } from './../util';

export enum DRIVER_TYPE {
  DEFAULT,
  INDEXEDDB,
  WEBSQL,
  LOCALSTORAGE
  // , INMEMORY
}

export interface WarehouseConfig {
  driver: DRIVER_TYPE;
  name: string;
  version: number;
  storeName: string;
  description: string;
}
