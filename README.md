# ngx-warehouse
[![Build Status](https://travis-ci.org/phillipcurl/ngx-warehouse.svg?branch=master)](https://travis-ci.org/phillipcurl/ngx-warehouse)
[![npm version](https://badge.fury.io/js/ngx-warehouse.svg)](http://badge.fury.io/js/ngx-warehouse)
[![devDependency Status](https://david-dm.org/phillipcurl/ngx-warehouse/dev-status.svg)](https://david-dm.org/phillipcurl/ngx-warehouse?type=dev)
[![GitHub issues](https://img.shields.io/github/issues/phillipcurl/ngx-warehouse.svg)](https://github.com/phillipcurl/ngx-warehouse/issues)
[![GitHub stars](https://img.shields.io/github/stars/phillipcurl/ngx-warehouse.svg)](https://github.com/phillipcurl/ngx-warehouse/stargazers)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/phillipcurl/ngx-warehouse/master/LICENSE)

## Demo
https://phillipcurl.github.io/ngx-warehouse/demo/

## Table of contents

- [About](#about)
- [Installation](#installation)
- [Documentation](#documentation)
- [Development](#development)
- [License](#license)

## About

An offline storage solution for Angular apps built on top of [LocalForage](https://github.com/localForage/localForage).

## Installation

Install through npm:
```bash
$ npm install --save ngx-warehouse
```

or Yarn:
```bash
$ yarn add ngx-warehouse
```

Then include in your apps module:

```typescript
import { Component, NgModule } from '@angular/core';
import { NgxWarehouseModule } from 'ngx-warehouse';

@NgModule({
  imports: [
    NgxWarehouseModule
  ]
})
export class MyModule {}
```

## Configuration
You can also configure the NgxWarehouseModule, though it does come with default options 
to allow you to get up and running quickly.

```typescript
import { NgxWarehouseModule, WarehouseConfig, DRIVER_TYPE } from 'ngx-warehouse';

const config: WarehouseConfig = {
  driver: DRIVER_TYPE.DEFAULT,
  name: 'Your App',
  version: 1.0,
  storeName: 'key_value_pairs', // Should be alphanumeric, with underscores.
  description: 'A description of your app'
};

@NgModule({
  declarations: [...],
  imports: [
    ...
    NgxWarehouseModule.configureWarehouse(config),
    ...
  ],
  bootstrap: [...]
})
```

The following DRIVER_TYPE's are available:
* DEFAULT - The warehouse will first try to connect to IndexedDB, then WebSQL, and finally LocalStorage if the first two fail.
* INDEXEDDB - Force the connection to IndexedDB.
* WEBSQL - Force the connection to WebSQL.
* LOCALSTORAGE - Force the connection to LocalStorage.


## Usage

Finally use the warehouse service one of your components:
```typescript
import { Warehouse } from 'ngx-warehouse';

@Component({
  ...
})
export class MyComponent implements OnInit {

  constructor(public warehouse: Warehouse) { }

  ngOnInit() {
    this.warehouse.get('key').subscribe(
      data => console.log(data),
      error => console.log(error)
    );
  }

}
```

You may also find it useful to view the [demo source](https://github.com/phillipcurl/ngx-warehouse/blob/master/demo/demo.component.ts).


## API

### Warehouse.set(key: string, value: any): Observable < any >

Saves an item to the current offline data store. The following data types are valid:
* Array
* ArrayBuffer
* Blob
* Float32Array
* Float64Array
* Int8Array
* Int16Array
* Int32Array
* Number
* Object
* Uint8Array
* Uint8ClampedArray
* Uint16Array
* Uint32Array
* String

```typescript
Warehouse.set('key', value).subscribe(
  (item) => {
    // do something with newly saved item
  },
  (error) => {
    // handle the error
  }
);
```

### Warehouse.get(key: string): Observable < any >

Gets an item from the storage library and supplies the result to a callback. 
If the key does not exist, getItem() will return null.

Even if undefined is saved, null will be returned by getItem(). This is due to a
limitation in localStorage, and for compatibility reasons localForage cannot
store the value undefined.

```typescript
Warehouse.get('key').subscribe(
  (data) => {
    // do something with the data
  },
  (error) => {
    // handle the error
  }
);
```


### Warehouse.remove(key: string): Observable < any >

Removes the value of a key from the offline store.

```typescript
Warehouse.remove('key').subscribe(
  (success) => {
    // do something on success
  },
  (error) => {
    // handle the error
  }
);
```


### Warehouse.destroy(): Observable < any >

USE WITH CAUTION:
Removes every key from the database, returning it to a blank slate.

```typescript
Warehouse.destroy().subscribe(
  (success) => {
    // do something on success
  },
  (error) => {
    // handle the error
  }
);
```


### Warehouse.count(): Observable < number >

Gets the number of keys in the offline store (i.e. its “length”).

```typescript
Warehouse.count().subscribe(
  (success) => {
    // do something on success
  },
  (error) => {
    // handle the error
  }
);
```


### Warehouse.key(): Observable < string >

Get the name of a key based on its ID.

This method is inherited from the localStorage API, but is acknowledged to be kinda weird.

```typescript
Warehouse.count().subscribe(
  (success) => {
    // do something on success
  },
  (error) => {
    // handle the error
  }
);
```


### Warehouse.keys(): Observable < string[] >

Get the list of all keys in the datastore.

```typescript
Warehouse.count().subscribe(
  (success) => {
    // do something on success
  },
  (error) => {
    // handle the error
  }
);
```


### Usage without a module bundler
```
<script src="node_modules/dist/umd/ngx-warehouse/ngx-warehouse.js"></script>
<script>
    // everything is exported ngxWarehouse namespace
</script>
```

## Documentation
All documentation is auto-generated from the source via typedoc and can be viewed here:
https://phillipcurl.github.io/ngx-warehouse/docs/

## Development

### Prepare your environment
* Install [Node.js](http://nodejs.org/) and NPM (should come with)
* Install local dev dependencies: `npm install` while current directory is this repo

### Development server
Run `npm start` to start a development server on port 8000 with auto reload + tests.

### Testing
Run `npm test` to run tests once or `npm run test:watch` to continually run tests.

### Release
* Bump the version in package.json (once the module hits 1.0 this will become automatic)
```bash
npm run release
```

## License

MIT
