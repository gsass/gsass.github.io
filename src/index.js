import Vue from 'vue';
import Markdown from './components/markdown';
import Navigation from './components/navigation';

window.onload = function () {
  var app = new Vue({
    el: '#app',

    template: `
      <span>
        <navigation :routes="routing"></navigation>
        <div class="content">
          <markdown :raw="bio"></markdown>
        </div>
      </span>`,

    components: {
      markdown: Markdown
    },

    data: function () {
      return {
        bio: `
I'm George. I make software, usually to make the internal tools and web store at [Warby Parker](https://www.warbyparker.com) better. Currently I work across our <small>(Python/JS–ES6,&nbsp;React,&nbsp;Redux, PSQL, AWS)</small> web stack. Yep, I wear glasses.
Before glasses, I worked on making [Electronic Health Records](https://www.vecna.com/) more useful and accessible. Way back when, I wrote code to run robots and test sensors. I still like hardware a bunch.
Outside of work, I like to make stuff, mostly food, bikes, and ceramics. I also like riding the bikes.
I have cat. His name's Lorenzo.

🍊`
      }
    }
  });
};
