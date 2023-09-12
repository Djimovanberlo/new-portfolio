import utrechtImg from 'assets/images/utrecht.png'
import tromsoImg from 'assets/images/tromso.png'
import amsterdamImg from 'assets/images/amsterdam.svg'
import ollinImg from 'assets/images/olln.png'
import { StackNames } from 'components/tech-stack'

export const timeLine = [
  {
    tooltipText: 'Born and raised in Utrecht',
    icon: utrechtImg,
  },
  {
    tooltipText: 'Exchange student in Tromsø',
    icon: tromsoImg,
  },
  {
    tooltipText: 'Studies and work in Amsterdam',
    icon: amsterdamImg,
  },
  {
    tooltipText: 'Living in Louvain la Neuve while working remotely',
    icon: ollinImg,
  },
]

export const aboutTitle = 'About'

const personal = {
  title: 'Personal',
  text: "Hello friendly friend and welcome to my portfolio website. As you might have guessed, my name is Djimo van Berlo. I have a background in psychology and creating and leading real-life games. In 2020 I retrained as full-stack developer and haven't looked back since. I love to learn new things and broaden my world view. In my free time I like to play with some code, cook up some games and develop some dinner. I like to walk around and explore my surroundings, and perhaps the occasional draping-over-the-couch. I'm married and I've lived in three countries (so far) and speak three languages (Dutch, English, Norwegian (bokmål)) - with some French and German sprinkled in. Have a look around! Or not, it's 100% up to you. Truly.",
  stack: [],
  img: 'https://via.placeholder.com/150',
}

const professional = {
  title: 'Professional',
  text: "I've been fullstack developing since 2020 and have been enjoying it greatly. I especially enjoy the mix frontend development offers: a blend of logic, styling and layout architecture. I consider myself creative and analytical, and I like to think I'm a good communicator. I have experience with many different types of projects, both professionally and personal - from a large HR vacancies site to an app for a smart boxing bag or a blogs built with headless CMS. I love writing clean, reusable code and I'm always looking to improve my skills. Underneath you can see a bunch of technologies I have experience with.",
  stack: Object.values(StackNames),
  img: 'https://via.placeholder.com/150',
}

const about = { personal, professional }

export default about
