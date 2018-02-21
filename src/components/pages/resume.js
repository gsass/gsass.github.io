import Markdown from '../markdown';
import Navigation from '../navigation';

const Resume = {
  linkName: 'Clout',

  components: {
    markdown: Markdown,
    navigation: Navigation,
  },

  template: `
    <span>
      <navigation :routes="routes"></navigation>
      <div class="content">
        <markdown :raw="resume"></markdown>
      </div>
    </span>`
}

export default Resume;
