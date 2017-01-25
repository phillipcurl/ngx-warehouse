import { isNil } from './../util';

export enum STORAGE_TYPE {
  DEFAULT,
  INDEXEDDB,
  WEBSQL,
  LOCALSTORAGE
  // , INMEMORY
}

export interface StorageConfig {
  driver: STORAGE_TYPE;
  name: string;
  version: number;
  storeName: string;
  description: string;
}

export class StorageConfigClass implements StorageConfig {
  driver: STORAGE_TYPE;
  name: string = 'ngx-warehouse';
  version: number = 1.0;
  storeName: string = 'ngx_storage_keyval_pairs'; // Should be alphanumeric, with underscores.
  description: string = 'The offline DB for ngx-warehouse';

  constructor(config?: StorageConfig) {

    if (!isNil(config)) {

      if (config.driver) this.driver = config.driver;
      if (config.name) this.name = config.name;
      if (config.version) this.version = config.version;
      if (config.storeName) this.storeName = config.storeName;
      if (config.description) this.description = config.description;

    }
  }
}