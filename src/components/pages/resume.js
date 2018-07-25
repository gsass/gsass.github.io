import Markdown from '../markdown';
const resumeContent = require('../../../content/resume.md');

const Resume = {
  props: ['routes'],

  linkName: 'Clout',
  template: `<markdown :raw="resume"></markdown>`,

  components: {
    markdown: Markdown,
  },

  data: () => {return {
    resume: resumeContent,
  }; },
}

export default Resume;
