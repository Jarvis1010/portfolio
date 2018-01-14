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

var about = exports.about = {
  description: 'Software developer that provides focused skills needed to meet technical challenges. Driven to learn and understand new technologies, implement fundamental design principles, and write reliable, well-tested, reusable code.',
  title: 'Web Developer',
  languages: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'JQuery', 'MongoDB', 'Angular.js', 'Express', 'Node', 'React', 'VBA', 'PHP', 'MySQL', 'JAVA']
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
    href: 'https://fast-caverns-82057.herokuapp.com/',
    src: stamp,
    alt: 'Screenshot of Unix Timestamp API',
    desc: 'Unix Time Stamp API'
  }, {
    href: 'https://fcc-tinyurl.herokuapp.com/',
    src: tiny,
    alt: 'Screenshot of tiny-url API',
    desc: 'Tiny-Url API'
  }],
  'Front End Projects': [{
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
    href: 'https://codepen.io/Jarvis1010/full/KNvJzB/',
    src: crawler,
    alt: 'Dungeon Crawler Screenshot',
    desc: 'Dungeon Crawler Game'
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
  }, {
    href: 'https://codepen.io/Jarvis1010/full/PGMLKJ/',
    src: weather,
    alt: 'Current Weather App Screenshot',
    desc: 'Simple Weather App'
  }, {
    href: 'https://codepen.io/Jarvis1010/full/KNVoEM/',
    src: markdown,
    alt: 'Screenshot of Github markdown previewer',
    desc: 'Github Markdown previewer'
  }]
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnN0YW50cy5qcyJdLCJuYW1lcyI6WyJhYm91dCIsImRlc2NyaXB0aW9uIiwidGl0bGUiLCJsYW5ndWFnZXMiLCJsaXN0IiwiZGVzYyIsInBhZ2VNZXRhIiwidGFncyIsIm5hbWUiLCJjb250ZW50IiwicHJvcGVydHkiLCJsaW5rcyIsImhyZWYiLCJwb3J0Zm9saW8iLCJzcmMiLCJ2b3RlIiwiYWx0Iiwibm9jdHVybmEiLCJzdG9jayIsInN0YW1wIiwidGlueSIsImxpZmUiLCJyZWNpcGUiLCJ0aWMiLCJzaW1vbiIsImNhbGMiLCJ0d2l0Y2giLCJjbG9jayIsImNyYXdsZXIiLCJxdW90ZSIsImhwIiwid2VhdGhlciIsIm1hcmtkb3duIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Y0FrQkE7O0FBQU8sSUFBTTtlQUFRLEFBQ04sQUFDYjtTQUZtQixBQUVaLEFBQ1A7YUFBVyxDQUFBLEFBQ1QsUUFEUyxBQUVULE9BRlMsQUFHVCxjQUhTLEFBSVQsYUFKUyxBQUtULFVBTFMsQUFNVCxXQU5TLEFBT1QsY0FQUyxBQVFULFdBUlMsQUFTVCxRQVRTLEFBVVQsU0FWUyxBQVdULE9BWFMsQUFZVCxPQVpTLEFBYVQsU0FoQkcsQUFBYyxBQUdSLEFBY1QsQUFJSjtBQXJCcUIsQUFDbkI7O0FBb0JLLElBQU0sc0JBQU8sQ0FBQSxBQUNsQixzQkFEa0IsQUFFbEIseUJBRmtCLEFBR2xCLGtCQUhLLEFBQWEsQUFJbEIsQUFHRjs7QUFBTyxJQUFNLHNCQUFOLEFBQ0wsQUFFRjs7QUFBTyxJQUFNO1NBQVcsQUFDZixBQUNQO1FBQU0sQ0FDSixFQUFFLE1BQUYsQUFBUSxlQUFlLFNBRG5CLEFBQ0osQUFBZ0MsZUFDaEMsRUFBRSxVQUFGLEFBQVksV0FBVyxTQUpwQixBQUFpQixBQUVoQixBQUVKLEFBQWdDLEFBSXBDO0FBUndCLEFBQ3RCOztBQU9LLElBQU0seUJBQ1gsRUFBRSxNQUFGLEFBQVEsaUNBQWlDLFNBRHRCLEFBQ25CLEFBQWtELFlBQ2xELEVBQUUsTUFBRixBQUFRLGlDQUFpQyxTQUZ0QixBQUVuQixBQUFrRDtRQUNsRCxBQUNRLEFBQ047V0FMRyxBQUFjLEFBR25CLEFBRVcsQUFJYjtBQU5FLEFBQ0UsQ0FKaUI7O0FBU2QsSUFBTTs7VUFFVCxBQUNRLEFBQ047U0FGRixBQUVPLEFBQ0w7U0FIRixBQUdPLEFBQ0w7VUFMNEIsQUFDOUIsQUFJUTtBQUpSLEFBQ0UsR0FGNEI7VUFPOUIsQUFDUSxBQUNOO1NBRkYsQUFFTyxBQUNMO1NBSEYsQUFHTyxBQUNMO1VBWDRCLEFBTzlCLEFBSVE7QUFKUixBQUNFO1VBS0YsQUFDUSxBQUNOO1NBRkYsQUFFTyxBQUNMO1NBSEYsQUFHTyxBQUNMO1VBakI0QixBQWE5QixBQUlRO0FBSlIsQUFDRTtVQUtGLEFBQ1EsQUFDTjtTQUZGLEFBRU8sQUFDTDtTQUhGLEFBR08sQUFDTDtVQXZCNEIsQUFtQjlCLEFBSVE7QUFKUixBQUNFO1VBS0YsQUFDUSxBQUNOO1NBRkYsQUFFTyxBQUNMO1NBSEYsQUFHTyxBQUNMO1VBOUJtQixBQUNTLEFBeUI5QixBQUlRLEFBR1Y7QUFQRSxBQUNFOztVQU9GLEFBQ1EsQUFDTjtTQUZGLEFBRU8sQUFDTDtTQUhGLEFBR08sQUFDTDtVQUxrQixBQUNwQixBQUlRO0FBSlIsQUFDRSxHQUZrQjtVQU9wQixBQUNRLEFBQ047U0FGRixBQUVPLEFBQ0w7U0FIRixBQUdPLEFBQ0w7VUFYa0IsQUFPcEIsQUFJUTtBQUpSLEFBQ0U7VUFLRixBQUNRLEFBQ047U0FGRixBQUVPLEFBQ0w7U0FIRixBQUdPLEFBQ0w7VUFqQmtCLEFBYXBCLEFBSVE7QUFKUixBQUNFO1VBS0YsQUFDUSxBQUNOO1NBRkYsQUFFTyxBQUNMO1NBSEYsQUFHTyxBQUNMO1VBdkJrQixBQW1CcEIsQUFJUTtBQUpSLEFBQ0U7VUFLRixBQUNRLEFBQ047U0FGRixBQUVPLEFBQ0w7U0FIRixBQUdPLEFBQ0w7VUE3QmtCLEFBeUJwQixBQUlRO0FBSlIsQUFDRTtVQUtGLEFBQ1EsQUFDTjtTQUZGLEFBRU8sQUFDTDtTQUhGLEFBR08sQUFDTDtVQW5Da0IsQUErQnBCLEFBSVE7QUFKUixBQUNFO1VBS0YsQUFDUSxBQUNOO1NBRkYsQUFFTyxBQUNMO1NBSEYsQUFHTyxBQUNMO1VBekNrQixBQXFDcEIsQUFJUTtBQUpSLEFBQ0U7VUFLRixBQUNRLEFBQ047U0FGRixBQUVPLEFBQ0w7U0FIRixBQUdPLEFBQ0w7VUEvQ2tCLEFBMkNwQixBQUlRO0FBSlIsQUFDRTtVQUtGLEFBQ1EsQUFDTjtTQUZGLEFBRU8sQUFDTDtTQUhGLEFBR08sQUFDTDtVQXJEa0IsQUFpRHBCLEFBSVE7QUFKUixBQUNFO1VBS0YsQUFDUSxBQUNOO1NBRkYsQUFFTyxBQUNMO1NBSEYsQUFHTyxBQUNMO1VBM0RrQixBQXVEcEIsQUFJUTtBQUpSLEFBQ0U7VUFLRixBQUNRLEFBQ047U0FGRixBQUVPLEFBQ0w7U0FIRixBQUdPLEFBQ0w7VUFqRWtCLEFBNkRwQixBQUlRO0FBSlIsQUFDRTtVQUtGLEFBQ1EsQUFDTjtTQUZGLEFBRU8sQUFDTDtTQUhGLEFBR08sQUFDTDtVQXhHQyxBQUFrQixBQWlDRCxBQW1FcEIsQUFJUTtBQUpSLEFBQ0U7QUFyR21CLEFBQ3ZCIiwiZmlsZSI6ImNvbnN0YW50cy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvSmFydmlzMTAwMC9wb3J0Zm9saW8vcG9ydGZvbGlvMiJ9