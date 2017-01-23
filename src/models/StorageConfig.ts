import { isNil } from './../util';

export enum STORAGE_TYPE {
  INDEXDB,
  WEBSQL,
  LOCALSTORAGE
  // , INMEMORY
}

export interface IStorageConfig {
  driver: STORAGE_TYPE;
  name: string;
  version: number;
  storeName: string;
  description: string;
}

export class StorageConfig implements IStorageConfig {
  driver: STORAGE_TYPE;
  name: string;
  version: number;
  storeName: string;
  description: string;

  constructor(config?: IStorageConfig) {

    if (isNil(config)) {

      this.driver = STORAGE_TYPE.INDEXDB; // Force WebSQL; same as using setDriver()
      this.name = 'ngx-storage';
      this.version = 1.0;
      // size        : 4980736, // Size of database, in bytes. WebSQL-only for now.
      this.storeName = 'keyvaluepairs'; // Should be alphanumeric, with underscores.
      this.description = 'The offline DB for ngx-storage';

    } else {

      this.driver = config.driver;
      this.name = config.name;
      this.version = config.version;
      this.storeName = config.storeName;
      this.description = config.description;

    }
  }
}