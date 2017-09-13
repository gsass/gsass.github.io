import Vue from 'vue';

window.onload = function () {
  console.log('vue starting');
  var app = new Vue({
    el: '#app',
    data: {
      emoji: "🍊", 
    }
  });
};
