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
        <li data-testid='inbox' className='inbox'>
          <span>
            <FaInbox />
          </span>
          Inbox
        </li>
        <li data-testid='today' className='today'>
          <span>
            <FaRegCalendar />
          </span>
          Today
        </li>
        <li data-testid='next_7' className='next_7'>
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
      <ul className='sidebar-projects'>Project Component</ul>
    </div>
  )
}
