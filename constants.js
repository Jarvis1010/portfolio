import vote from "./images/Screen Shot 2017-03-28 at 4.40.43 PM.png";
import nocturna from "./images/Screen Shot 2017-04-10 at 10.55.50 AM.png";
import stock from "./images/Screen Shot 2017-04-13 at 4.52.49 PM.png";
import stamp from "./images/Screen Shot 2017-04-10 at 11.01.44 AM.png";
import tiny from "./images/Screen Shot 2017-03-28 at 8.17.19 PM.png";
import life from "./images/Game of Life.png";
import recipe from "./images/recipebox.png";
import tic from "./images/tictactoe.png";
import simon from "./images/Simon.png";
import calc from "./images/calculator.png";
import twitch from "./images/Twitch.png";
import clock from "./images/clock.png";
import crawler from "./images/crawler.png";
import markdown from "./images/markdown.png";
import quote from "./images/quote.png";
import hp from "./images/HarryPotter.png";
import weather from "./images/weather.png";
import node from "./images/nodejs.png";
import code from "./images/copycode.png";
import inator from "./images/inator.png";
import mormono from "./images/mormono.png";

export const about = {
  description:
    "Software developer that provides focused skills needed to meet technical challenges. Driven to learn and understand new technologies, implement fundamental design principles, and write reliable, well-tested, reusable code.",
  title: "Web Developer",
  languages: [
    "HTML",
    "CSS",
    "JavaScript",
    "ES6",
    "React.js",
    "Bootstrap",
    "JQuery",
    "MongoDB",
    "Angular.js",
    "Express",
    "Node",
    "VBA",
    "MySQL"
  ]
};

export const list = [
  "Justin Travis Mair",
  "travis.mair@gmail.com",
  "(801) 200-7597",
  "Salt Lake City, Utah"
];

export const desc =
  "If you want to get in touch with me? Be it to request more info about myself or my experience, to ask for my resume, random questions about the universe and the meaning of life... just feel free to drop me a line anytime.";

export const pageMeta = {
  title: "Portfolio of Travis Mair",
  tags: [
    { name: "description", content: "Portfolio" },
    { property: "og:type", content: "article" }
  ]
};

export const links = [
  { href: "https://github.com/Jarvis1010", content: "github" },
  { href: "https://twitter.com/want2code", content: "twitter" },
  {
    href: "https://www.linkedin.com/in/travis-mair-2b709447",
    content: "linkedin"
  }
];

export const portfolio = {
  "npm modules and React Native apps": [
    {
      href: "https://www.npmjs.com/package/react-copy-code",
      src: code,
      alt: "Screenshot of react-copy-code",
      desc: "react-copy-code react-component"
    },
    {
      href: "https://www.npmjs.com/package/react-component-inator",
      src: inator,
      alt: "Screenshot of react-component-inator",
      desc: "react-component-inator node module"
    },
    {
      href: "https://play.google.com/store/apps/details?id=com.sanktajlibroj",
      src: mormono,
      alt: "Screenshot of Esperanto Book of Mormon",
      desc: "Book of Mormon in Esperanto Android App"
    }
  ],
  "Full Stack Projects and APIs": [
    {
      href: "https://vote-ster.herokuapp.com/",
      src: vote,
      alt: "Screenshot of Vote-ster MEAN stack site",
      desc: "Vote-Ster MEAN Stack Site"
    },
    {
      href: "https://la-vida-nocturna.herokuapp.com/",
      src: nocturna,
      alt: "Screenshot of La Vida Nocturna",
      desc: "Nightlife coordinator Mean Stack Site"
    },
    {
      href: "https://realtimestock.herokuapp.com/",
      src: stock,
      alt: "Screenshot of real time stock web socket stack site",
      desc: "Web Socket Stock Chart Site"
    },
    {
      href: "https://fcc-tinyurl.herokuapp.com/",
      src: tiny,
      alt: "Screenshot of tiny-url API",
      desc: "Tiny-Url API"
    }
  ],
  "Front End Projects": [
    {
      href: "https://codepen.io/Jarvis1010/full/KNvJzB/",
      src: crawler,
      alt: "Dungeon Crawler Screenshot",
      desc: "Dungeon Crawler Game"
    },
    {
      href: "https://codepen.io/Jarvis1010/full/qqRJKy",
      src: life,
      alt: "Screenshot of Conway's game of life",
      desc: "Game of Life Simulator"
    },
    {
      href: "https://codepen.io/Jarvis1010/full/mOrLbx",
      src: recipe,
      alt: "Screenshot of Recipe box",
      desc: "Recipe Box App"
    },
    {
      href: "https://codepen.io/Jarvis1010/full/woKKjK/",
      src: tic,
      alt: "Tic Tac Toe game",
      desc: "Tic-Tac-Toe"
    },
    {
      href: "https://codepen.io/Jarvis1010/full/dOYwvx/",
      src: simon,
      alt: "Screenshot of simon game",
      desc: "80's game 'SIMON'"
    },
    {
      href: "https://codepen.io/Jarvis1010/full/ObVJoX/",
      src: calc,
      alt: "Calculator",
      desc: "JavaScript Calculator App using Angular.js"
    },
    {
      href: "https://codepen.io/Jarvis1010/full/qqBgyK/",
      src: twitch,
      alt: "Screen shot of twitchers app",
      desc: "Twitcher Streamers"
    },
    {
      href: "https://codepen.io/Jarvis1010/full/rWVdZd/",
      src: clock,
      alt: "Pomodoro clock",
      desc: "Pomodoro Countdown Clock"
    },
    {
      href: "https://codepen.io/Jarvis1010/full/QKevdp",
      src: quote,
      alt: "Quote Getting App Screenshot",
      desc: "Quote Getter App"
    },
    {
      href: "https://codepen.io/Jarvis1010/full/xRxVRp/",
      src: hp,
      alt: "Harry Potter Wiki Browser Sreenshot",
      desc: "Wikipedia Searcher"
    }
  ]
};
