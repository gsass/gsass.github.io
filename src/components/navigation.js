const Navigation = {
  props: ['routes'],

  template: `
    <ul class="nav">
      <li v-for="(page, route) in routes">
        <a :href="route" @click="onClickRoute">{{page.linkName}}</a>
      </li>
    </ul>
  `,

  onClickLink: function () {
  },

  data: function () {
    return {
      currentRoute: window.location.hash || '/'
    }
  },
}

export default Navigation;
