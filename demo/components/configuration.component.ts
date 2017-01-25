import { Component } from '@angular/core';

@Component({
  selector: 'demo-configuration',
  template: `
    <section class="bt b--black-10 flex flex-column flex-row-l items-stretch justify-stretch">
      <article class="bg-white br b--black-10 flex w-50-l items-center content-start justify-center-ns justify-start">
        <span class="pa6-l ph4-m pv2 ph3 w-70-l">
            <h2 class="f3 f2-ns dib w-auto highlight-header">configuration</h2>
            <!--<h3 class="f3-ns f4 fw5-ns fw6 mb3 fw5">
              Take responsive screenshots with full viewport control
            </h3>-->
            <p class="f5 lh-copy mt0 f4-ns normal">
              Urlbox allows you to change the viewport dimensions to simulate screen sizes of all shapes and sizes.
              You can also supply a user agent string to screenshot mobile optimised sites and emulate mobile devices.
            </p>
          </span>
      </article>
      <article class="bg-washed-green flex w-50-l items-center justify-center pa5-l ph4-m pv2 ph3">
        <div class="h6 overflow-y-scroll">
          <dl class="f5-ns f6 mv2">
            <dt class="dib dark-green b">now-sounds.now</dt>
            <dd class="dib ml0 green">Returns the SoundCloud user object</dd>
          </dl>
          <dl class="f5-ns f6 mv2">
            <dt class="dib dark-green b">now-sounds.n</dt>
            <dd class="dib ml0 green">Losses</dd>
          </dl>
          <dl class="f5-ns f6 mv2">
            <dt class="dib dark-green b">now-sounds.now.sh/api/users/sts</dt>
            <dd class="dib ml0 green">Winning Percentages</dd>
          </dl>
          <dl class="f5-ns f6 mv2">
            <dt class="dib dark-green b">now-sounds.now.sh/api/users/followings</dt>
            <dd class="dib ml0 green">Games Back</dd>
          </dl>
          <dl class="f5-ns f6 mv2">
            <dt class="dib dark-green b">now-sounds.now.sh/api/usefollowers</dt>
            <dd class="dib ml0 green">Home Record</dd>
          </dl>
          <dl class="f5-ns f6 mv2">
            <dt class="dib dark-green b">now-sounds.now.sh/api/users/comments</dt>
            <dd class="dib ml0 green">Road Record</dd>
          </dl>
          <dl class="f5-ns f6 mv2">
            <dt class="dib dark-green b">now-sounds.now.sh/api/usevorites</dt>
            <dd class="dib ml0 green">Division Record</dd>
          </dl>
        </div>
      </article>
    </section>
  `
})
export class ConfigurationComponent {
}