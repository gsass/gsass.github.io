import Markdown from '../markdown';
// import Navigation from './navigation';

const Bio = {
  linkName: 'Me',

  components: {
    markdown: Markdown
  },

  template: `
    <span>
      <navigation :routes="routes"></navigation>
      <div class="content">
        <markdown :raw="bio"></markdown>
      </div>
    </span>`,

  data: function () {
    return {
      bio: `
I'm George. I make software, usually to make the internal tools and web store at [Warby Parker](https://www.warbyparker.com) better. Currently I work across our <small>(Python/JS–ES6,&nbsp;React,&nbsp;Redux, PSQL, AWS)</small> web stack. Yep, I wear glasses.
Before glasses, I worked on making [Electronic Health Records](https://www.vecna.com/) more useful and accessible. Way back when, I wrote code to run robots and test sensors. I still like hardware a bunch.
Outside of work, I like to make stuff, mostly food, bikes, and ceramics. I also like riding the bikes.
I have a cat. His name's Lorenzo.

🍊`,
    }
  }
}

export default Bio;
