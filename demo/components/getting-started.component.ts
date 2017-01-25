import { Component } from '@angular/core';

@Component({
  selector: 'demo-getting-started',
  template: `
    <section class="bt b--black-10 flex flex-column flex-row-l items-stretch justify-stretch">
      <article class="bg-white br b--black-10 flex w-50-l items-center content-start justify-center-ns justify-start false">
        <span class="pa5-l ph4-m pv2 ph3 w-70-l">
            <h2 class="f3 f2-ns dib w-auto highlight-header">getting started</h2>
            <ol class="f5 lh-copy mt0 f4-ns normal">
              <li>First, install ngx-warehouse via npm or yarn.</li>
              <li>Next, import the NgxWarehouseModule in your AppModule.</li>
              <li>Finally, add the NgxWarehouseModule to your AppModule imports.</li>
            </ol>
          </span>
      </article>
      <article class="bg-light-gray flex w-50-l items-center justify-center pa5-l ph4-m pv2 ph3">
        <div class="fw4 h6 overflow-y-scroll">
          <code>
            <pre>
{{npmString}}

or

{{yarnString}}
            </pre>
          </code>
          <code>
            <pre>
{{importString}}
            </pre>
          </code>
          <code>
            <pre>
{{moduleString}}
            </pre>
          </code>
        </div>
      </article>
    </section>
  `
})
export class GettingStartedComponent {
  npmString: string = `npm install --save ngx-warehouse`;
  yarnString: string = `yarn add ngx-warehouse`;
  importString: string = `import { NgxWarehouseModule } from 'ngx-warehouse';`;
  moduleString: string = `@NgModule({
  declarations: [...],
  imports: [
    ...
    NgxWarehouseModule,
    ...
  ],
  bootstrap: [...]
})`;
}