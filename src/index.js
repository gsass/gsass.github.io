import Vue from 'vue';

import Bio from './components/pages/bio'
import Resume from './components/pages/resume'
import Blog from './components/pages/blog'

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
          window.location.hash || '#me'
        },
        set: function (route) {
          console.log('wow');
          this.page = routes[route] // TODO 404 page` || NotFound`
        }
      },
      page () {
        return Bio;
      },
      pageProps () {
        return {routes: routes}
      },
    },

    methods: {
      onHashChange: (function (evt) {
        this.currentRoute = evt.newURL.includes('#') ? evt.newURL.split('#')[1] : '#me'
      }).bind(this)
    },

    mounted () {
      this.$nextTick( function () {
        window.addEventListener('hashchange', this.onHashChange);
        this.onHashChange();
      });
    },

    render (h) {
      return h(this.page, {props: this.pageProps});
    }
  });
};
