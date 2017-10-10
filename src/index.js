import Vue from 'vue';
import Markdown from './components/markdown';

window.onload = function () {
  console.log('vue starting');
  var app = new Vue({
    el: '#app',

    template: `<div class="content">
      <markdown :raw="emoji"></markdown>
    </div>`,

    components: {
      markdown: Markdown
    },

    data: function () {
      return {emoji: "🍊"}
    }
  });
};
