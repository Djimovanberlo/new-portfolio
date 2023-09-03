import { H2, P } from 'components/typography'
import utrechtImg from 'assets/images/utrecht.png'
import tromsoImg from 'assets/images/tromso.png'
import amsterdamImg from 'assets/images/amsterdam.svg'
import ollinImg from 'assets/images/olln.png'

const TimelineIcon = ({ tooltipChildren, icon }) => (
  <div className='timelineIcon'>
    <P className='tooltip'>{tooltipChildren}</P>
    <img src={icon} alt='timeline img' />
  </div>
)

const Timeline = () => {
  const temp = [
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

  const data = temp.flatMap(({ icon, tooltipText }, index) => {
    const element = <TimelineIcon key={index} tooltipChildren={tooltipText} icon={icon} />
    const separator = <div key={`hr-${index}`} className='timeline__line' />
    return [element, separator]
  })

  return (
    <div className='timeline'>
      {data}
      <H2>?</H2>
    </div>
  )
}

export default Timeline
