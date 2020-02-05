import {
  FaChevronDown,
  FaInbox,
  FaRegCalendarAlt,
  FaRegCalendar
} from 'react-icons/fa'

export const Sidebar = () => {
  return (
    <div className='sidebar' data-testid='sidebar'>
      <ul className='sidebar-items'>
        <li>
          <span>
            <FaInbox />
          </span>
          Inbox
        </li>
        <li>
          <span>
            <FaRegCalendar />
          </span>
          Today
        </li>
        <li>
          <span>
            <FaRegCalendarAlt />
          </span>
          Next 7 days
        </li>
      </ul>

      <div className='sidebar-middle'>
        <span>
          <FaChevronDown />
        </span>
        <h2>Projects</h2>
      </div>
    </div>
  )
}
