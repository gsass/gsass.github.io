import marked from 'marked';

const Markdown = {
  props: ['raw'],

  template: '<p v-html="rendered"></p>',

  data: function () {
    return {rendered: marked(this.raw)}
  }
}

export default Markdown;
