import React, {
  createContext,
  useState,
  ReactNode,
  useContext,
  useCallback,
  useRef,
} from 'react'

import useScrollspy from './useScrollSpy'

interface DynamicRefsContextType {
  headerRef: React.RefObject<HTMLHeadElement> | null
  sectionRefs: React.RefObject<any>[]
  addRef: (ref: React.RefObject<any>) => void
  activeId: string
}

const DynamicRefsContext = createContext<DynamicRefsContextType>({
  headerRef: null,
  sectionRefs: [],
  addRef: () => {},
  activeId: '',
})

interface Props {
  children: ReactNode
}

export const DynamicRefsProvider: React.FC<Props> = ({ children }) => {
  const headerRef = useRef<HTMLHeadElement>(null)
  const headerHeight = headerRef.current?.clientHeight ?? 0
  const [sectionRefs, setSectionRefs] = useState<React.RefObject<any>[]>([])
  const activeId = useScrollspy({ refs: sectionRefs, offset: headerHeight })

  const addRef = useCallback(ref => {
    setSectionRefs(prevRefs => [...prevRefs, ref])
  }, [])

  return (
    <DynamicRefsContext.Provider
      value={{ headerRef, sectionRefs, addRef, activeId }}>
      {children}
    </DynamicRefsContext.Provider>
  )
}

export const useDynamicRefs = () => useContext(DynamicRefsContext)

export default DynamicRefsContext
