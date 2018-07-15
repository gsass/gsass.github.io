import Vue from 'vue';

import Bio from './components/pages/bio'
import Resume from './components/pages/resume'
import Blog from './components/pages/blog'
import Navigation from './components/navigation'

require('../css/styles.css');

const routes = {
  '#me': Bio,
  '#resume': Resume,
  '#blog': Blog,
};
// Set up router.
const events = new Vue()

window.onload = function () {
  // Set up app.
  var app = new Vue({
    el: '#app',

    render: create => create(App),
  });
}

const App = {
  template: `
    <span>
      <navigation :routes="routes" :events="events"></navigation>
      <div class="content">
        <component :is="page"></component>
      </div>
    </span>`,

  components: { 
    navigation: Navigation,
  },

  created() {
    this.page = routes[this.getCurrentRoute()];
    events.$on('navigate', () => {
      console.log(`Navigating to ${this.getCurrentRoute()}`);
      this.page = routes[this.getCurrentRoute()];
    });
  },

  data: () => { return { events: events, page: {}, routes: routes}; },

  methods: {
    getCurrentRoute() { return window.location.hash || '#me'; },
  },

};
