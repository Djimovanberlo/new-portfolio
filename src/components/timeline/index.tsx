import Icon from 'components/icon'
import { Tooltip } from 'components/tooltip'

const TimelineIcon = ({ tooltipChildren }) => (
  <div className='timelineIcon'>
    <Tooltip>{tooltipChildren}</Tooltip>
    <Icon />
  </div>
)

const Timeline = () => {
  const data = ['a', 'b', 'c'].map((item, index) => {
    return <TimelineIcon key={index} tooltipChildren={item} />
  })

  return <div>{data}</div>
}

export default Timeline
