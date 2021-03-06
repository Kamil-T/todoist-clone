import { FaPizzaSlice } from 'react-icons/fa'
import { useState } from 'react'
import AddTask from '../AddTask'

const Header = ({ darkMode, setDarkMode }) => {
  const [shouldShowMain, setShouldShowMain] = useState<boolean>(false)
  const [showQuickAddTask, setShowQuickAddTask] = useState<boolean>(false)

  return (
    <header className='header' data-testid='header'>
      <nav>
        <div className='logo'>
          <img src='/images/logo.png' alt='Todoist' />
        </div>
        <div className='settings'>
          <ul>
            <li className='settings__add'>
              <button
                data-testid='quick-add-task-action'
                aria-label='Quick add task'
                onClick={() => {
                  setShowQuickAddTask(true)
                  setShouldShowMain(true)
                }}
                onKeyDown={() => {
                  setShowQuickAddTask(true)
                  setShouldShowMain(true)
                }}>
                +
              </button>
            </li>
            <li className='settings__darkmode'>
              <button
                data-testid='dark-mode-action'
                aria-label='Dark mode on/off'
                onClick={() => setDarkMode(!darkMode)}
                onKeyDown={() => setDarkMode(!darkMode)}>
                <FaPizzaSlice />
              </button>
            </li>
          </ul>
        </div>
      </nav>
      <AddTask
        showAddTaskMain={false}
        shouldShowMain={shouldShowMain}
        showQuickAddTask={showQuickAddTask}
        setShowQuickAddTask={setShowQuickAddTask}
      />
    </header>
  )
}

export default Header
