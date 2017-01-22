import { Component } from '@angular/core';

@Component({
  selector: 'storage-hello-world',
  template: 'Hello world from the {{ projectTitle }} module!'
})
export class HelloWorldComponent {
  projectTitle: string = 'ngx-storage';
}
