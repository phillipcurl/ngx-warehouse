import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as localforage from 'localforage';

import { StorageConfig, STORAGE_TYPE } from './models';
import { Storage } from './services';
import { LocalForageToken, StorageConfigToken } from './tokens';
import { isNil } from './util';

export function localforageFactory(): any {
  return localforage;
}

export function storageConfigFactory(storageConfig?: StorageConfig): any {
  let config: StorageConfig;
  if (isNil(storageConfig)) {
    console.log('config is null. building default config');
    config = {
      driver: STORAGE_TYPE.DEFAULT,
      name: 'ngx-warehouse',
      version: 1.0,
      storeName: 'ngx_storage_keyval_pairs', // Should be alphanumeric, with underscores.
      description: 'The offline DB for ngx-warehouse'
    };
  } else {
    config = storageConfig;
  }
  return { provide: StorageConfigToken, useValue: config };
}

@NgModule({
  imports: [CommonModule],
  providers: [
    {
      provide: LocalForageToken,
      useFactory: localforageFactory
    },
    storageConfigFactory(),
    Storage
  ]
})
export class NgxWarehouseModule {

  static provideStorage(storageConfig: StorageConfig): ModuleWithProviders {
    return {
      ngModule: NgxWarehouseModule,
      providers: [
        storageConfigFactory(storageConfig)
      ]
    };
  }

}