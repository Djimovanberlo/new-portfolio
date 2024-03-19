import { CSSProperties, useId } from 'react'
import { GoArrowDown } from 'react-icons/go'

import { SectionNames } from 'interfaces/layout'
import Section from 'layout/section'
import { H1, H2 } from 'components/typography'

const BannerSection = () => {
  const id = useId()

  const djimoArr = 'Djimo van Berlo'.split('')
  const uniqueRandomNums = Array.from({ length: djimoArr.length }, () =>
    Math.floor(Math.random() * djimoArr.length)
  )

  const djimoArrWithRandomNums = djimoArr.map((letter, index) => ({
    letter,
    num: uniqueRandomNums[index],
  }))

  return (
    <Section name={SectionNames.Banner}>
      <div className='banner__container'>
        <H1>
          {djimoArrWithRandomNums.map(({ letter, num }, index) => (
            <span key={id + index} style={{ '--delay': num } as CSSProperties}>
              {letter}
            </span>
          ))}
        </H1>
        <H2 style={{ '--delay': djimoArr.length } as CSSProperties}>
          Frontend Developer
        </H2>
      </div>
      <a href={`#${SectionNames.About}`}>
        <GoArrowDown
          // onClick={handleClickScroll}
          style={{ '--delay': djimoArr.length } as CSSProperties}
          className='banner__arrow'
        />
      </a>
    </Section>
  )
}

export default BannerSection
