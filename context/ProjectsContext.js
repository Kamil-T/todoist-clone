import { createContext, useContext } from 'react'
import { useProjects } from '../hooks'

export const ProjectsContext = createContext()

const ProjectsProvider = ({ children }) => {
  const { projects, setProjects } = useProjects()

  return (
    <ProjectsContext.Provider value={{ projects, setProjects }}>
      {children}
    </ProjectsContext.Provider>
  )
}

export default ProjectsProvider

export const useProjectsValue = () => useContext(ProjectsContext)
