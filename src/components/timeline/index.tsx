import { timeLine } from 'lib/copy/about'
import { H2, P } from 'components/typography'

const TimelineIcon = ({ tooltipChildren, icon }) => (
  <div className='timelineIcon'>
    <P className='tooltip'>{tooltipChildren}</P>
    <img src={icon} alt='timeline img' />
  </div>
)

const Timeline = () => {
  const data = timeLine.flatMap(({ icon, tooltipText }, index) => {
    const element = (
      <TimelineIcon key={index} tooltipChildren={tooltipText} icon={icon} />
    )
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
