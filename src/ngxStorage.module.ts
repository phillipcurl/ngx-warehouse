import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as localforage from 'localforage';

import { LocalForageService } from './services';
import { LocalForageToken } from './tokens';

import { HelloWorldComponent } from './helloWorld.component';

export function localforageFactory(): any {
    return localforage;
}

@NgModule({
  declarations: [
    HelloWorldComponent
  ],
  imports: [CommonModule],
  exports: [HelloWorldComponent]
})
export class NgxStorageModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgxStorageModule,
      providers: [{
          provide: LocalForageToken,
          useFactory: localforageFactory
        },
        LocalForageService
      ]
    };
  }

}