import { Checkbox } from './Checkbox'
import { useTasks } from '../hooks'

export const Tasks = () => {
  const { tasks } = useTasks('1')

  let projectName = ''

  return (
    <div className='tasks' data-testid='tasks'>
      <h2 data-test-id='project-name'>{projectName}</h2>

      <ul className='tasks-list'>
        {tasks.map(task => (
          <li key={`${task.id}`}>
            <Checkbox id={task.id} />
            <span>{task.task}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
