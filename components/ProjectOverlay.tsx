import { useProjectsValue } from '../context/ProjectsContext'

const ProjectOverlay = ({
  setProject,
  showProjectOverlay = false,
  setShowProjectOverlay
}) => {
  const { projects } = useProjectsValue()

  return (
    projects &&
    showProjectOverlay && (
      <div className='project-overlay' data-testid='project-overlay'>
        <ul className='project-overlay__list'>
          {projects.map(project => (
            <li key={project.projectId}>
              <div
                data-testid='project-overlay-action'
                role='button'
                tabIndex={0}
                aria-label='Select the task project'
                onClick={() => {
                  setProject(project.projectId)
                  setShowProjectOverlay(false)
                }}
                onKeyDown={() => {
                  setProject(project.projectId)
                  setShowProjectOverlay(false)
                }}>
                {project.name}
              </div>
            </li>
          ))}
        </ul>
      </div>
    )
  )
}

export default ProjectOverlay
