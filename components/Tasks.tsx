import Checkbox from './Checkbox'
import { useTasks } from '../hooks'
import { collatedTasks } from '../constants'
import { getTitle, getCollatedTitle, getCollatedTasks } from '../helpers'
import { useProjectsValue } from '../context/ProjectsContext'
import IndividualProject from './IndividualProject'
import { useSelectedProjectValue } from '../context/SelectedProjectProvider'
import { useEffect } from 'react'
import AddTask from './AddTask'

const Tasks = () => {
  const { selectedProject } = useSelectedProjectValue()
  const { projects } = useProjectsValue()
  const { tasks } = useTasks(selectedProject)

  let projectName = ''

  if (
    projects &&
    selectedProject &&
    !getCollatedTasks(selectedProject)
  ) {
    projectName = getTitle(projects, selectedProject).name
  }

  if (getCollatedTasks(selectedProject) && selectedProject) {
    projectName = getCollatedTitle(collatedTasks, selectedProject).name
  }

  useEffect(() => {
    document.title = `${projectName}`
  })

  return (
    <div className='tasks' data-testid='tasks'>
      <h2 data-test-id='project-name'>{projectName}</h2>
      <ul className='tasks__list'>
        {tasks.map(task => (
          <li key={`${task.id}`}>
            <Checkbox id={task.id} taskDesc={task.task} />
            <span>{task.task}</span>
          </li>
        ))}
      </ul>
      <AddTask
        showAddTaskMain
        shouldShowMain
        showQuickAddTask={false}
        setShowQuickAddTask
      />
    </div>
  )
}

export default Tasks
