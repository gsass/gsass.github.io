import Vue from 'vue';

const Events = new Vue()
const Navigation = {
  props: ['routes'],

  template: `
    <ul class="nav">
      <li v-for="(page, route) in routes">
        <a :href="route" @click="onClickLink">{{page.linkName}}</a>
      </li>
    </ul>
  `,

  methods: {
    onClickLink: function (evt) {
      evt.preventDefault()
      window.history.pushState(null, null, evt.target.hash);
      Events.$emit('navigate', evt.target.hash);
    },
  },

  data: function () {
    return {
      currentRoute: window.location.hash || '/'
    }
  },
}

export default Navigation;
export {Events};
