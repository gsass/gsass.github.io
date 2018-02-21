import Markdown from '../markdown';
import Navigation from '../navigation';

const Blog = {
  linkName: 'Words',

  components: {
    markdown: Markdown,
    navigation: Navigation,
  },

  template: `
    <span>
      <navigation :routes="routes"></navigation>
      <div class="content">
        <markdown :raw="blog"></markdown>
      </div>
    </span>`
}

export default Blog;
