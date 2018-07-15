const Navigation = {
  props: ['routes', 'events'],

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
      this.events.$emit('navigate', evt.target.hash);
    },
  },

  data: function () {
    return {
      currentRoute: window.location.hash || '/'
    }
  },
}

export default Navigation;
