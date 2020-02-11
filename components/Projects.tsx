import { useState } from 'react'
import { useSelectedProjectValue } from '../context/SelectedProjectProvider'
import { useProjectsValue } from '../context/ProjectsContext'

export const Projects = ({ activeValue = null }) => {
  const [active, setActive] = useState(activeValue)
  const { setSelectedProject } = useSelectedProjectValue()
  const { projects } = useProjectsValue()
  return (
    projects &&
    projects.map(project => (
      <li
        key={project.projectId}
        data-doc-id={project.docId}
        data-testId='project-action'
        className={
          active === project.projectId
            ? 'active sidebar-project'
            : 'sidebar-project'
        }
        onClick={() => {
          setActive(project.projectId)
          setSelectedProject(project.projectId)
        }}>
        {JSON.stringify(project)}
      </li>
    ))
  )
}
