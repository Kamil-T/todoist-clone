import { useState } from 'react'
import { FaRegListAlt, FaRegCalendarAlt } from 'react-icons/fa'
import moment from 'moment'
import firebase from '../firebase'
import { useSelectedProjectValue } from '../context/SelectedProjectContext'
import ProjectOverlay from './ProjectOverlay'
import TaskDate from './TaskDate'

const AddTask = ({
  showAddTaskMain = false,
  shouldShowMain = false,
  showQuickAddTask,
  setShowQuickAddTask
}) => {
  const [task, setTask] = useState<string>('')
  const [taskDate, setTaskDate] = useState<string>('')
  const [project, setProject] = useState<string>('')
  const [showMain, setShowMain] = useState<boolean>(shouldShowMain)
  const [showProjectOverlay, setShowProjectOverlay] = useState<boolean>(false)
  const [showTaskDate, setShowTaskDate] = useState<boolean>(false)

  const { selectedProject } = useSelectedProjectValue()

  const addTask = () => {
    const projectId = project || selectedProject
    let collatedDate = ''

    if (projectId === 'TODAY') {
      collatedDate = moment().format('DD/MM/YYYY')
    } else if (projectId === 'NEXT_7') {
      collatedDate = moment()
        .add(7, 'days')
        .format('DD/MM/YYYY')
    }
    return (
      task &&
      projectId &&
      firebase
        .firestore()
        .collection('tasks')
        .add({
          archived: false,
          projectId,
          task,
          date: collatedDate || taskDate,
          userId: 'JHQssoAQ496Ygn1mTuM1'
        })
        .then(() => {
          setTask('')
          setProject('')
          setShowMain(false)
          setShowProjectOverlay(false)
        })
    )
  }

  return (
    <div
      className={showQuickAddTask ? 'add-task add-task__overlay' : 'add-task'}
      data-testid='add-task-comp'>
      {showAddTaskMain && (
        <div
          className='add-task__shallow'
          data-testid='show-main-action'
          aria-label='Add task'
          tabIndex={0}
          role='button'
          onClick={() => setShowMain(!showMain)}
          onKeyDown={() => setShowMain(!showMain)}>
          <span className='add-task__plus'>+</span>
          <span className='add-task__text'>Add Task</span>
        </div>
      )}

      {(showMain || showQuickAddTask) && (
        <div className='add-task__main' data-testid='add-task-main'>
          {showQuickAddTask && (
            <>
              <div data-testid='quick-add-task'>
                <h2 className='header'>Quick Add Task</h2>
                <span
                  className='add-task__cancel-x'
                  data-testid='add-task-quick-cancel'
                  aria-label='Cancel adding task'
                  tabIndex={0}
                  role='button'
                  onClick={() => {
                    setShowMain(false)
                    setShowProjectOverlay(false)
                    setShowQuickAddTask(false)
                  }}
                  onKeyDown={() => {
                    setShowMain(false)
                    setShowProjectOverlay(false)
                    setShowQuickAddTask(false)
                  }}>
                  X
                </span>
              </div>
            </>
          )}
          <ProjectOverlay
            setProject={setProject}
            showProjectOverlay={showProjectOverlay}
            setShowProjectOverlay={setShowProjectOverlay}
          />
          <TaskDate
            setTaskDate={setTaskDate}
            showTaskDate={showTaskDate}
            setShowTaskDate={setShowTaskDate}
          />
          <input
            className='add-task__content'
            data-testid='add-task-content'
            aria-label='Enter your task'
            type='text'
            value={task}
            onChange={e => setTask(e.target.value)}
          />
          <button
            type='button'
            className='add-task__submit'
            data-testid='add-task'
            onClick={() =>
              showQuickAddTask
                ? addTask() && setShowQuickAddTask(false)
                : addTask()
            }>
            Add Task
          </button>
          {!showQuickAddTask && (
            <span
              className='add-task__cancel'
              data-testid='add-task-main-cancel'
              aria-label='Cancel adding a task'
              tabIndex={0}
              role='button'
              onClick={() => {
                setShowMain(false)
                setShowProjectOverlay(false)
              }}
              onKeyDown={() => {
                setShowMain(false)
                setShowProjectOverlay(false)
              }}>
              Cancel
            </span>
          )}
          <span
            className='add-task__project'
            data-testid='show-project-overlay'
            onClick={() => setShowProjectOverlay(!showProjectOverlay)}
            onKeyDown={() => setShowProjectOverlay(!showProjectOverlay)}
            tabIndex={0}
            role='button'>
            <FaRegListAlt />
          </span>
          <span
            className='add-task__date'
            data-testid='show-task-date-overlay'
            onClick={() => setShowTaskDate(!showTaskDate)}
            onKeyDown={() => setShowTaskDate(!showTaskDate)}
            tabIndex={0}
            role='button'>
            <FaRegCalendarAlt />
          </span>
        </div>
      )}
    </div>
  )
}

export default AddTask
