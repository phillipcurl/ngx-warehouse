import { Component } from '@angular/core';

@Component({
  selector: 'demo-getting-started',
  template: `
    <section class="bt b--black-10 flex flex-column flex-row-l items-stretch justify-stretch">
      <article class="bg-white br b--black-10 flex w-50-l items-center content-start justify-center-ns justify-start false">
        <span class="pa6-l ph4-m pv2 ph3 w-70-l">
            <h2 class="f3 f2-ns dib w-auto highlight-header">getting started</h2>
            <ol class="f5 lh-copy mt0 f4-ns normal">
              <li>First, install ngx-warehouse via npm or yarn.</li>
              <li>Next, import the NgxWarehouseModule in your AppModule.</li>
              <li>Finally, add the NgxWarehouseModule to your AppModule imports.</li>
            </ol>
          </span>
      </article>
      <article class="bg-light-gray flex w-50-l items-center justify-center pa5-l ph4-m pv2 ph3">
        <div class="h6 overflow-y-scroll">
          <code>
            <pre>
{{npm install --save ngx-warehouse
or
yarn add ngx-warehouse
            </pre>
          </code>
          <code>
            <pre>
import { NgxWarehouseModule } from 'ngx-warehouse';
            </pre>
          </code>
          <code>
            <pre>
@NgModule({
  declarations: [...],
  imports: [
    ...
    NgxWarehouseModule,
    ...
  ],
  bootstrap: [...]
})
export class AppModule { }}}
            </pre>
          </code>
        </div>
      </article>
    </section>
  `
})
export class GettingStartedComponent {
}