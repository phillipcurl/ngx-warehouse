import { Component, OnInit } from '@angular/core';
import { Storage } from '../src';

@Component({
  selector: 'storage-demo-app',
  templateUrl: 'demo.component.html'
})
export class DemoComponent implements OnInit {

  item: any;

  constructor(public storage: Storage) {
  }

  ngOnInit(): void {
    let testObject: any = {
      anArray: [
        'first string',
        'another string',
        'and even one more'
      ],
      aNumber: 2,
      anObject: {
        nestedValue: {
          key: 'Woah this is nested!'
        }
      }
    };
    this.storage.set('test', testObject)
      .subscribe((item) => {
        this.item = item;
      });
  }
}
