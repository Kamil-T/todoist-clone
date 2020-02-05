import { FaPizzaSlice } from 'react-icons/fa'

export interface HeaderProps {}

const Header = (props: HeaderProps) => {
  return (
    <header className='header' data-testid='header'>
      <nav>
        <div className='logo'>
          <img src='/images/logo.png' alt='Todoist' />
        </div>
        <div>
          <ul>
            <li>+</li>
            <li>
              <FaPizzaSlice />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header
