import { Component, OnInit } from '@angular/core';
import { Warehouse } from '../src';

@Component({
  selector: 'storage-demo-app',
  templateUrl: 'demo.component.html'
})
export class DemoComponent implements OnInit {

  item: any;

  constructor(public warehouse: Warehouse) {
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

    this.warehouse.set('test', testObject);

    this.warehouse.get('test').subscribe(data => {
      this.item = data;
    });
  }
}
