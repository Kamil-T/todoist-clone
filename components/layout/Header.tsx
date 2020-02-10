import { FaPizzaSlice } from 'react-icons/fa'

export interface HeaderProps {}

const Header = (props: HeaderProps) => {
  return (
    <header className='header' data-testid='header'>
      <nav>
        <div className='logo'>
          <img src='/images/logo.png' alt='Todoist' />
        </div>
        <div className='settings'>
          <ul>
            <li data-testid='quick-add-task-action' className='settings-add'>
              +
            </li>
            <li data-testid='dark-mode-action' className='settings-darkmode'>
              <FaPizzaSlice />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header
