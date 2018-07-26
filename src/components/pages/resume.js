import Markdown from '../markdown';
const resumeContent = require('../../../content/resume.md');

const Resume = {
  linkName: 'My Resume',
  template: `<markdown class="resume" :raw="resume"></markdown>`,

  components: {
    markdown: Markdown,
  },

  data: () => {return {
    resume: resumeContent,
  }; },
}

export default Resume;
