import utrechtImg from 'assets/images/utrecht.png'
import tromsoImg from 'assets/images/tromso.png'
import amsterdamImg from 'assets/images/amsterdam.svg'
import ollinImg from 'assets/images/olln.png'

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
  text: 'This is a simple example of a React component. This is a simple example of a React component.This is a simple example of a React component.This is a simple example of a React component.This is a simple example of a React component.This is a simple example of a React component.This is a simple example of a React component.This is a simple example of a React component.This is a simple example of a React component.',
  img: 'https://via.placeholder.com/150',
}

const professional = {
  title: 'Professional',
  text: 'This is a simple example of a React component. This is a simple example of a React component.This is a simple example of a React component.This is a simple example of a React component.This is a simple example of a React component.This is a simple example of a React component.This is a simple example of a React component.This is a simple example of a React component.This is a simple example of a React component.',
  img: 'https://via.placeholder.com/150',
}

const about = { personal, professional }

export default about
