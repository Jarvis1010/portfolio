'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var vote = '/static/images/Screen Shot 2017-03-28 at 4.40.43 PM.png';
var nocturna = '/static/images/Screen Shot 2017-04-10 at 10.55.50 AM.png';
var stock = '/static/images/Screen Shot 2017-04-13 at 4.52.49 PM.png';
var stamp = '/static/images/Screen Shot 2017-04-10 at 11.01.44 AM.png';
var tiny = '/static/images/Screen Shot 2017-03-28 at 8.17.19 PM.png';
var life = '/static/images/Game of Life.png';
var recipe = '/static/images/recipebox.png';
var tic = '/static/images/tictactoe.png';
var simon = '/static/images/Simon.png';
var calc = '/static/images/calculator.png';
var twitch = '/static/images/Twitch.png';
var clock = '/static/images/clock.png';
var crawler = '/static/images/crawler.png';
var markdown = '/static/images/markdown.png';
var quote = '/static/images/quote.png';
var hp = '/static/images/HarryPotter.png';
var weather = '/static/images/weather.png';
var node = '/static/images/nodejs.png';
var code = '/static/images/copycode.png';
var inator = '/static/images/inator.png';
var mormono = '/static/images/mormono.png';

var about = exports.about = {
  description: 'Software developer that provides focused skills needed to meet technical challenges. Driven to learn and understand new technologies, implement fundamental design principles, and write reliable, well-tested, reusable code.',
  title: 'Web Developer',
  languages: ['HTML', 'CSS', 'JavaScript', 'ES6', 'React.js', 'Bootstrap', 'JQuery', 'MongoDB', 'Angular.js', 'Express', 'Node', 'VBA', 'MySQL']
};

var list = exports.list = ['Justin Travis Mair', 'travis.mair@gmail.com', '(801) 200-7597', 'Salt Lake City, Utah'];

var desc = exports.desc = 'If you want to get in touch with me? Be it to request more info about myself or my experience, to ask for my resume, random questions about the universe and the meaning of life... just feel free to drop me a line anytime.';

var pageMeta = exports.pageMeta = {
  title: 'Portfolio of Travis Mair',
  tags: [{ name: 'description', content: 'Portfolio' }, { property: 'og:type', content: 'article' }]
};

var links = exports.links = [{ href: 'https://github.com/Jarvis1010', content: 'github' }, { href: 'https://twitter.com/want2code', content: 'twitter' }, {
  href: 'https://www.linkedin.com/in/travis-mair-2b709447',
  content: 'linkedin'
}];

var portfolio = exports.portfolio = {
  'npm modules and React Native apps': [{
    href: 'https://www.npmjs.com/package/react-copy-code',
    src: code,
    alt: 'Screenshot of react-copy-code',
    desc: 'react-copy-code react-component'
  }, {
    href: 'https://www.npmjs.com/package/react-component-inator',
    src: inator,
    alt: 'Screenshot of react-component-inator',
    desc: 'react-component-inator node module'
  }, {
    href: 'https://play.google.com/store/apps/details?id=com.lalibromormono',
    src: mormono,
    alt: 'Screenshot of Esperanto Book of Mormon',
    desc: 'Book of Mormon in Esperanto Android App'
  }],
  'Full Stack Projects and APIs': [{
    href: 'https://vote-ster.herokuapp.com/',
    src: vote,
    alt: 'Screenshot of Vote-ster MEAN stack site',
    desc: 'Vote-Ster MEAN Stack Site'
  }, {
    href: 'https://la-vida-nocturna.herokuapp.com/',
    src: nocturna,
    alt: 'Screenshot of La Vida Nocturna',
    desc: 'Nightlife coordinator Mean Stack Site'
  }, {
    href: 'https://realtimestock.herokuapp.com/',
    src: stock,
    alt: 'Screenshot of real time stock web socket stack site',
    desc: 'Web Socket Stock Chart Site'
  }, {
    href: 'https://fcc-tinyurl.herokuapp.com/',
    src: tiny,
    alt: 'Screenshot of tiny-url API',
    desc: 'Tiny-Url API'
  }],
  'Front End Projects': [{
    href: 'https://codepen.io/Jarvis1010/full/KNvJzB/',
    src: crawler,
    alt: 'Dungeon Crawler Screenshot',
    desc: 'Dungeon Crawler Game'
  }, {
    href: 'https://codepen.io/Jarvis1010/full/qqRJKy',
    src: life,
    alt: "Screenshot of Conway's game of life",
    desc: 'Game of Life Simulator'
  }, {
    href: 'https://codepen.io/Jarvis1010/full/mOrLbx',
    src: recipe,
    alt: 'Screenshot of Recipe box',
    desc: 'Recipe Box App'
  }, {
    href: 'https://codepen.io/Jarvis1010/full/woKKjK/',
    src: tic,
    alt: 'Tic Tac Toe game',
    desc: 'Tic-Tac-Toe'
  }, {
    href: 'https://codepen.io/Jarvis1010/full/dOYwvx/',
    src: simon,
    alt: 'Screenshot of simon game',
    desc: "80's game 'SIMON'"
  }, {
    href: 'https://codepen.io/Jarvis1010/full/ObVJoX/',
    src: calc,
    alt: 'Calculator',
    desc: 'JavaScript Calculator App using Angular.js'
  }, {
    href: 'https://codepen.io/Jarvis1010/full/qqBgyK/',
    src: twitch,
    alt: 'Screen shot of twitchers app',
    desc: 'Twitcher Streamers'
  }, {
    href: 'https://codepen.io/Jarvis1010/full/rWVdZd/',
    src: clock,
    alt: 'Pomodoro clock',
    desc: 'Pomodoro Countdown Clock'
  }, {
    href: 'https://codepen.io/Jarvis1010/full/QKevdp',
    src: quote,
    alt: 'Quote Getting App Screenshot',
    desc: 'Quote Getter App'
  }, {
    href: 'https://codepen.io/Jarvis1010/full/xRxVRp/',
    src: hp,
    alt: 'Harry Potter Wiki Browser Sreenshot',
    desc: 'Wikipedia Searcher'
  }]
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnN0YW50cy5qcyJdLCJuYW1lcyI6WyJhYm91dCIsImRlc2NyaXB0aW9uIiwidGl0bGUiLCJsYW5ndWFnZXMiLCJsaXN0IiwiZGVzYyIsInBhZ2VNZXRhIiwidGFncyIsIm5hbWUiLCJjb250ZW50IiwicHJvcGVydHkiLCJsaW5rcyIsImhyZWYiLCJwb3J0Zm9saW8iLCJzcmMiLCJjb2RlIiwiYWx0IiwiaW5hdG9yIiwibW9ybW9ubyIsInZvdGUiLCJub2N0dXJuYSIsInN0b2NrIiwidGlueSIsImNyYXdsZXIiLCJsaWZlIiwicmVjaXBlIiwidGljIiwic2ltb24iLCJjYWxjIiwidHdpdGNoIiwiY2xvY2siLCJxdW90ZSIsImhwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2NBc0JBOztBQUFPLElBQU07ZUFBUSxBQUNOLEFBQ2I7U0FGbUIsQUFFWixBQUNQO2FBQVcsQ0FBQSxBQUNULFFBRFMsQUFFVCxPQUZTLEFBR1QsY0FIUyxBQUlULE9BSlMsQUFLVCxZQUxTLEFBTVQsYUFOUyxBQU9ULFVBUFMsQUFRVCxXQVJTLEFBU1QsY0FUUyxBQVVULFdBVlMsQUFXVCxRQVhTLEFBWVQsT0FmRyxBQUFjLEFBR1IsQUFhVCxBQUlKO0FBcEJxQixBQUNuQjs7QUFtQkssSUFBTSxzQkFBTyxDQUFBLEFBQ2xCLHNCQURrQixBQUVsQix5QkFGa0IsQUFHbEIsa0JBSEssQUFBYSxBQUlsQixBQUdGOztBQUFPLElBQU0sc0JBQU4sQUFDTCxBQUVGOztBQUFPLElBQU07U0FBVyxBQUNmLEFBQ1A7UUFBTSxDQUNKLEVBQUUsTUFBRixBQUFRLGVBQWUsU0FEbkIsQUFDSixBQUFnQyxlQUNoQyxFQUFFLFVBQUYsQUFBWSxXQUFXLFNBSnBCLEFBQWlCLEFBRWhCLEFBRUosQUFBZ0MsQUFJcEM7QUFSd0IsQUFDdEI7O0FBT0ssSUFBTSx5QkFDWCxFQUFFLE1BQUYsQUFBUSxpQ0FBaUMsU0FEdEIsQUFDbkIsQUFBa0QsWUFDbEQsRUFBRSxNQUFGLEFBQVEsaUNBQWlDLFNBRnRCLEFBRW5CLEFBQWtEO1FBQ2xELEFBQ1EsQUFDTjtXQUxHLEFBQWMsQUFHbkIsQUFFVyxBQUliO0FBTkUsQUFDRSxDQUppQjs7QUFTZCxJQUFNOztVQUVULEFBQ1EsQUFDTjtTQUZGLEFBRU8sQUFDTDtTQUhGLEFBR08sQUFDTDtVQUxpQyxBQUNuQyxBQUlRO0FBSlIsQUFDRSxHQUZpQztVQU9uQyxBQUNRLEFBQ047U0FGRixBQUVPLEFBQ0w7U0FIRixBQUdPLEFBQ0w7VUFYaUMsQUFPbkMsQUFJUTtBQUpSLEFBQ0U7VUFLRixBQUNRLEFBQ047U0FGRixBQUVPLEFBQ0w7U0FIRixBQUdPLEFBQ0w7VUFsQm1CLEFBQ2MsQUFhbkMsQUFJUSxBQUdWO0FBUEUsQUFDRTs7VUFPRixBQUNRLEFBQ047U0FGRixBQUVPLEFBQ0w7U0FIRixBQUdPLEFBQ0w7VUFMNEIsQUFDOUIsQUFJUTtBQUpSLEFBQ0UsR0FGNEI7VUFPOUIsQUFDUSxBQUNOO1NBRkYsQUFFTyxBQUNMO1NBSEYsQUFHTyxBQUNMO1VBWDRCLEFBTzlCLEFBSVE7QUFKUixBQUNFO1VBS0YsQUFDUSxBQUNOO1NBRkYsQUFFTyxBQUNMO1NBSEYsQUFHTyxBQUNMO1VBakI0QixBQWE5QixBQUlRO0FBSlIsQUFDRTtVQUtGLEFBQ1EsQUFDTjtTQUZGLEFBRU8sQUFDTDtTQUhGLEFBR08sQUFDTDtVQTVDbUIsQUFxQlMsQUFtQjlCLEFBSVEsQUFHVjtBQVBFLEFBQ0U7O1VBT0YsQUFDUSxBQUNOO1NBRkYsQUFFTyxBQUNMO1NBSEYsQUFHTyxBQUNMO1VBTGtCLEFBQ3BCLEFBSVE7QUFKUixBQUNFLEdBRmtCO1VBT3BCLEFBQ1EsQUFDTjtTQUZGLEFBRU8sQUFDTDtTQUhGLEFBR08sQUFDTDtVQVhrQixBQU9wQixBQUlRO0FBSlIsQUFDRTtVQUtGLEFBQ1EsQUFDTjtTQUZGLEFBRU8sQUFDTDtTQUhGLEFBR08sQUFDTDtVQWpCa0IsQUFhcEIsQUFJUTtBQUpSLEFBQ0U7VUFLRixBQUNRLEFBQ047U0FGRixBQUVPLEFBQ0w7U0FIRixBQUdPLEFBQ0w7VUF2QmtCLEFBbUJwQixBQUlRO0FBSlIsQUFDRTtVQUtGLEFBQ1EsQUFDTjtTQUZGLEFBRU8sQUFDTDtTQUhGLEFBR08sQUFDTDtVQTdCa0IsQUF5QnBCLEFBSVE7QUFKUixBQUNFO1VBS0YsQUFDUSxBQUNOO1NBRkYsQUFFTyxBQUNMO1NBSEYsQUFHTyxBQUNMO1VBbkNrQixBQStCcEIsQUFJUTtBQUpSLEFBQ0U7VUFLRixBQUNRLEFBQ047U0FGRixBQUVPLEFBQ0w7U0FIRixBQUdPLEFBQ0w7VUF6Q2tCLEFBcUNwQixBQUlRO0FBSlIsQUFDRTtVQUtGLEFBQ1EsQUFDTjtTQUZGLEFBRU8sQUFDTDtTQUhGLEFBR08sQUFDTDtVQS9Da0IsQUEyQ3BCLEFBSVE7QUFKUixBQUNFO1VBS0YsQUFDUSxBQUNOO1NBRkYsQUFFTyxBQUNMO1NBSEYsQUFHTyxBQUNMO1VBckRrQixBQWlEcEIsQUFJUTtBQUpSLEFBQ0U7VUFLRixBQUNRLEFBQ047U0FGRixBQUVPLEFBQ0w7U0FIRixBQUdPLEFBQ0w7VUExR0MsQUFBa0IsQUErQ0QsQUF1RHBCLEFBSVE7QUFKUixBQUNFO0FBdkdtQixBQUN2QiIsImZpbGUiOiJjb25zdGFudHMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL0phcnZpczEwMDAvcG9ydGZvbGlvL3BvcnRmb2xpbzIifQ==