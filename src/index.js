import Vue from 'vue';

import Bio from './components/pages/bio'
import Resume from './components/pages/resume'
import Blog from './components/pages/blog'
import {Events} from './components/navigation'

require('../css/styles.css');

const routes = {
  '#me': Bio,
  '#resume': Resume,
  '#blog': Blog,
};

window.onload = function () {
  var app = new Vue({
    el: '#app',

    computed: {
      currentRoute: {
        get: function () {
          return window.location.hash || '#me'
        },
        // set: function (route) {
        //   this.page = routes[route] // TODO 404 page` || NotFound`
        // }
      },
      page () {
        return Bio;
      },
      pageProps () {
        return {routes: routes}
      },
    },

    methods: {
      onHashChange: function (newHash) {
        this.currentRoute = newHash.slice(1);
        // evt.newURL.includes('#') ? evt.newURL.split('#')[1] : '#me'
        // console.log(evt.newURL)
      }
    },

    created () {
      Events.$on('navigate', this.onHashChange);
    },

    render (h) {
      return h(this.page, {props: this.pageProps});
    }
  });
};
