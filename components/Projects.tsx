import { useState } from 'react'
import { useSelectedProjectValue } from '../context/SelectedProjectContext'
import { useProjectsValue } from '../context/ProjectsContext'
import IndividualProject from './IndividualProject'

const Projects = ({ activeValue = null }) => {
  const [active, setActive] = useState<boolean>(activeValue)
  const { setSelectedProject } = useSelectedProjectValue()
  const { projects } = useProjectsValue()

  return (
    projects &&
    projects.map(project => (
      <li
        key={project.projectId}
        data-doc-id={project.docId}
        data-testid='project-action-parent'
        className={
          active === project.projectId
            ? 'active sidebar__project'
            : 'sidebar__project'
        }>
        <div
          role='button'
          data-testid='project-action'
          tabIndex={0}
          aria-label={`Select ${project.name} as the task project`}
          onClick={() => {
            setActive(project.projectId)
            setSelectedProject(project.projectId)
          }}
          onKeyDown={() => {
            setActive(project.projectId)
            setSelectedProject(project.projectId)
          }}>
          <IndividualProject project={project} />
        </div>
      </li>
    ))
  )
}

export default Projects
