import { Component } from '@angular/core';

@Component({
  selector: 'demo-configuration',
  template: `
    <section class="bt b--black-10 flex flex-column flex-row-l items-stretch justify-stretch">
      <article class="bg-white br b--black-10 flex w-50-l items-center content-start justify-center-ns justify-start">
        <span class="pa5-l ph4-m pv2 ph3 w-70-l">
          <h2 class="f3 f2-ns dib w-auto highlight-header">configuration</h2>
          <!--<h3 class="f3-ns f4 fw5-ns fw6 mb3 fw5">
            Take responsive screenshots with full viewport control
          </h3>-->
          <p class="f5 lh-copy mt0 f4-ns normal">
            ngx-warehouse comes with a default configuration to get up and running quickly. However, if you'd
            like to customize the options, it's easy to do so.
          </p>
          <ol class="f5 lh-copy mt0 f4-ns normal">
            <li>Along with the NgxWarehouseModule, import WarehouseConfig and DRIVER_TYPE.</li>
            <li>Next, import the NgxWarehouseModule in your AppModule.</li>
            <li>Finally, add the NgxWarehouseModule to your AppModule imports.</li>
          </ol>
        </span>
      </article>
      <article class="bg-washed-green flex w-50-l items-center justify-center pa5-l ph4-m pv2 ph3">
        <div class="h6 overflow-y-scroll">
          <code>
            <pre>
{{importString}}
            </pre>
          </code>
          <code>
            <pre>
{{configString}}
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
export class ConfigurationComponent {
  importString: string = `import { NgxWarehouseModule, WarehouseConfig, DRIVER_TYPE } from 'ngx-warehouse';`;
  configString: string = `const config: WarehouseConfig = {
  driver: DRIVER_TYPE.DEFAULT,
  name: 'Your App',
  version: 1.0,
  storeName: 'key_value_pairs', // Should be alphanumeric, with underscores.
  description: 'A description of your app'
};`;
  moduleString: string = `@NgModule({
  declarations: [...],
  imports: [
    ...
    NgxWarehouseModule.configureWarehouse(config),
    ...
  ],
  bootstrap: [...]
})`;
}