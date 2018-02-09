import Vue from 'vue';

import Bio from './components/pages/bio'
import Resume from './components/pages/resume'
import Blog from './components/pages/blog'

require('../css/styles.css');

const routes = {
  '/': Bio,
  '#me': Bio,
  '#resume': Resume,
  '#blog': Blog,
};

window.onload = function () {
  var app = new Vue({
    el: '#app',

    computed: {
      page () {
        return routes[this.currentRoute] // TODO 404 page` || NotFound`
      }
    },
 
    data: function () {
      return {
        routes: routes,
        currentRoute: window.location.hash || '/'
      }
    },

    render (h) { return h(this.page) }
  });
};
