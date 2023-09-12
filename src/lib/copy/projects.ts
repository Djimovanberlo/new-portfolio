import taalkundigImg from 'assets/images/taalkundig.png'
import sisoeImg from 'assets/images/sisoe.png'
import talentCalcImg from 'assets/images/talent-calc.png'
import weddingImg from 'assets/images/wedding.png'
import portfolioImg from 'assets/images/portfolio.png'
import ancientBasementImg from 'assets/images/ancient-basement.png'
import cardGeneratorImg from 'assets/images/card-generator.png'
import dinogameImg from 'assets/images/dinogame.png'

const sisoe = {
  title: 'Sisoe',
  text: 'Sisoe is a portfolio website I build for a friend. It has a homepage - which contains selected portfolio items and a contact form; and a portoflio page - which holds all portfolio items. The website is build with React, Sass, GraphQL and Contentful. The code is done, but the content is not filled in yet.',
  imgSrc: sisoeImg,
  githubLink: 'https://github.com/Djimovanberlo/sisoe',
  projectLink: 'https://sisoe.vercel.app/',
  stack: ['react', 'sass', 'graphQL', 'contentFul'],
}

const taalkundig = {
  title: 'Taalkundig',
  text: 'Taalkundig is a blog website I built for my brother. It as a homepage - which hold a blog post overview; a blogpost detail page and a short about page. The website is build with React, Sass, GraphQL and Contentful. The code is done, but the content is not filled in yet.',
  imgSrc: taalkundigImg,
  githubLink: 'https://github.com/Djimovanberlo/taalkundig',
  projectLink: 'https://taalkundig.vercel.app/',
  stack: ['react', 'sass', 'graphQL', 'contentFul'],
}

const talentCalculator = {
  title: 'Talent Calculator',
  text: "I started this project to learn TypeScript. It is a redo of Classic World of Warcraft's talent calculator, but with some of my own dream talents and content added in. The code is super messy, as I was just starting out. It was built with React, TypeScript and vanilla CSS.",
  imgSrc: talentCalcImg,
  githubLink: 'https://github.com/Djimovanberlo/tc-ts',
  projectLink: 'https://djimovanberlo.github.io/tc-ts',
  stack: ['react', 'typeScript', 'sass', 'contentFul'],
}

const portfolio = {
  title: 'Portfolio',
  text: "You're looking at it! Had a bunch of fun building this and to be able to design it myself. I can only imagine what kind of portfolio I'll be able to build in a few years' time.",
  imgSrc: portfolioImg,
  githubLink: 'https://github.com/Djimovanberlo/new-portfolio',
  projectLink: '',
  stack: ['react', 'typeScript', 'sass'],
}

const weddingSite = {
  title: 'Wedding Site',
  text: "I built a website for my wedding party. On this website there's some info about the party and a form to RSVP. The website is build with React, Sass and Firebase. It has two themes, some people did not get the humor (which makes it funnier). Password: 'RideauRouge'",
  imgSrc: weddingImg,
  githubLink: 'https://github.com/Djimovanberlo/trouwuhh',
  projectLink: 'https://djimovanberlo.github.io/trouwuhh',
  stack: ['react', 'sass', 'firebase'],
}

const cardGenerator = {
  title: 'Card Generator',
  text: '⚠ Under construction ⚠. While developing my board game Dino Game, my partner in crime and I want to be able to generate cards to try them out. Currently, we need to handle each individual card inside design software. This is a waste of time. This card generator will allow us to generate cards based on an input form.',
  imgSrc: cardGeneratorImg,
  githubLink: '',
  projectLink: '',
  stack: [''],
}

const ancientBasement = {
  title: 'Ancient Basement',
  text: '⚠ Under construction ⚠. Ancient Basement is a in-browser game that I am working on. Its central gameplay loop is repeated fights in jRPG style (Lufia, Final Fantasy, etc.), combined with a roguelite-style meta game. The game is being build with React, TypeScript and Sass.',
  imgSrc: ancientBasementImg,
  githubLink: 'https://github.com/Djimovanberlo/ancient-basement',
  projectLink: '',
  stack: ['react', 'typeScript', 'sass'],
}

const dinoGame = {
  title: 'Dino Game',
  text: 'Dino Game a board game that I am working on along with a friend. Players take on the form of Dinosaur heroes and have to cooperate in order to defend their land from evil invading mammal tribes. Dino game combines elements of deck building, tower defense and RPGs.',
  imgSrc: dinogameImg,
  githubLink: '',
  projectLink: '',
  stack: [''],
}

const projects = {
  portfolio,
  weddingSite,
  sisoe,
  taalkundig,
  talentCalculator,
  ancientBasement,
  cardGenerator,
  dinoGame,
}

export const projectsIntro =
  'Below are a bunch of my projects. Some of them are still being worked on and some of them are finished. I also included some projects that I am working on with others.'

export default projects
