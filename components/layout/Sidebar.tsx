import { useState } from 'react'
import { useSelectedProjectValue } from '../../context/SelectedProjectProvider'
import Projects from '../Projects'
import {
  FaChevronDown,
  FaInbox,
  FaRegCalendarAlt,
  FaRegCalendar
} from 'react-icons/fa'
import AddProject from '../AddProject'

const Sidebar = () => {
  const { setSelectedProject } = useSelectedProjectValue()

  const [active, setActive] = useState('inbox')
  const [showProjects, setShowProjects] = useState(true)

  return (
    <div className='sidebar' data-testid='sidebar'>
      <ul className='sidebar__generic'>
        <li
          data-testid='inbox'
          className={active === 'inbox' ? 'active' : undefined}
          onClick={() => {
            setActive('inbox')
            setSelectedProject('INBOX')
          }}>
          <span>
            <FaInbox />
          </span>
          Inbox
        </li>
        <li
          data-testid='today'
          className={active === 'today' ? 'active' : undefined}
          onClick={() => {
            setActive('today')
            setSelectedProject('TODAY')
          }}>
          <span>
            <FaRegCalendar />
          </span>
          Today
        </li>
        <li
          data-testid='next_7'
          className={active === 'next_7' ? 'active' : undefined}
          onClick={() => {
            setActive('next_7')
            setSelectedProject('NEXT_7')
          }}>
          <span>
            <FaRegCalendarAlt />
          </span>
          Next 7 days
        </li>
      </ul>

      <div
        className='sidebar__middle'
        onClick={() => setShowProjects(!showProjects)}>
        <span>
          <FaChevronDown
            className={!showProjects ? 'hidden-projects' : undefined}
          />
        </span>
        <h2>Projects</h2>
      </div>
      <ul className='sidebar__projects'>{showProjects && <Projects />}</ul>
      {showProjects && <AddProject />}
    </div>
  )
}

export default Sidebar
