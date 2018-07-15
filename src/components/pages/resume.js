import Markdown from '../markdown';

const Resume = {
  props: ['routes'],

  linkName: 'Clout',
  template: `<markdown :raw="resume"></markdown>`,

  components: {
    markdown: Markdown,
  },

  data: () => {return {
    resume: 'content here',
  }; },
}

export default Resume;
