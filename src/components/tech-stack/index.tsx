import { useId } from 'react'
import { FaGithub } from 'react-icons/fa'
import {
  SiContentful,
  SiNextdotjs,
  SiStyledcomponents,
  SiTailwindcss,
} from 'react-icons/si'
import {
  BiLinkExternal,
  BiLogoReact,
  BiLogoTypescript,
  BiLogoGraphql,
  BiLogoCss3,
  BiLogoSass,
} from 'react-icons/bi'

export enum StackNames {
  React = 'react',
  TypeScript = 'typeScript',
  NextJs = 'nextJs',
  GraphQL = 'graphQL',
  CSS = 'css',
  Sass = 'sass',
  StyledComponents = 'styledComponents',
  Tailwind = 'tailwind',
  Contentful = 'contentFul',
}

interface Props {
  className?: string
  techStack: StackNames[]
  githubLink: string
  projectLink: string
}

const stackIcons = {
  react: <BiLogoReact />,
  typeScript: <BiLogoTypescript />,
  nextJs: <SiNextdotjs />,
  graphQL: <BiLogoGraphql />,
  css: <BiLogoCss3 />,
  sass: <BiLogoSass />,
  styledComponents: <SiStyledcomponents />,
  tailwind: <SiTailwindcss />,
  contentFul: <SiContentful />,
}

export const Stack = ({ techStack }: Pick<Props, 'techStack'>) => {
  const id = useId()

  return (
    <div className='stack'>
      {techStack.map(tech => (
        <div key={id + tech} className='techIcon'>
          {stackIcons[tech]}
        </div>
      ))}
    </div>
  )
}

const TechStack = ({
  className = '',
  techStack,
  githubLink,
  projectLink,
}: Props) => {
  const handleGithubClick = () => {
    window.open(githubLink, '_blank')
  }

  const handleProjectClick = () => {
    window.open(projectLink, '_blank')
  }

  return (
    <div className={`techStack ${className}`}>
      {githubLink && (
        <FaGithub
          className='techIcon techStack__github'
          onClick={handleGithubClick}
        />
      )}
      <Stack techStack={techStack} />
      {projectLink && (
        <BiLinkExternal
          className='techIcon techStack__project'
          onClick={handleProjectClick}
        />
      )}
    </div>
  )
}

export default TechStack
