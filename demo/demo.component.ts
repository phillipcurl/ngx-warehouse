import { Component, OnInit } from '@angular/core';
import { Storage } from '../src';

@Component({
  selector: 'storage-demo-app',
  templateUrl: 'demo.component.html'
})
export class DemoComponent implements OnInit {

  item: any;
  storage: Storage;

  constructor(storage: Storage) {
    this.storage = storage;
  }

  ngOnInit() {
    this.storage.setItem({
      key: 'test',
      value: 'just a test value'
    }).subscribe((item) => {
      this.item = item;
    });
  }
}
