import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as localforage from 'localforage';

import { IStorageConfig, StorageConfig } from './models';

import { LocalForageService, Storage } from './services';
import { LocalForageToken } from './tokens';

export function localforageFactory(): any {
  return localforage;
}

export function provideStorage(storageConfig: StorageConfig): any {
  return {
    provide: Storage,
    useFactory: () => new Storage(localforageFactory(), storageConfig)
  };
}

@NgModule({
  imports: [CommonModule],
  providers: [
    {
      provide: LocalForageToken,
      useFactory: localforageFactory
    },
    Storage
  ]
})
export class NgxStorageModule {

  static forRoot(storageConfig?: StorageConfig): ModuleWithProviders {

    return {
      ngModule: NgxStorageModule,
      providers: [
        {
          provide: LocalForageToken,
          useFactory: localforageFactory
        },
        provideStorage(storageConfig || new StorageConfig())
      ]
    };
  }

}