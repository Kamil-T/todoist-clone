import { render, cleanup, fireEvent } from '@testing-library/react'
import Tasks from '../components/Tasks'
import { useSelectedProjectValue } from '../context/SelectedProjectContext'

jest.mock('../context/SelectedProjectContext', () => ({
  useSelectedProjectValue: jest.fn()
}))

jest.mock('../context/ProjectsContext', () => ({
  useProjectsValue: jest.fn(() => ({
    setProjects: jest.fn(),
    projects: [
      {
        name: 'THE OFFICE',
        projectId: '1',
        userId: 'JHQssoAQ496Ygn1mTuM1',
        docId: 'kamil-t'
      }
    ]
  }))
}))

jest.mock('../hooks', () => ({
  useTasks: () => ({
    tasks: [
      {
        id: 'mx2taaXpF38vYqMGbVtY',
        archived: false,
        date: '20/03/2020',
        projectId: '1',
        task:
          'Would I rather be feared or loved? Easy. Both. I want people to be afraid of how much they love me.',
        userId: 'JHQssoAQ496Ygn1mTuM1'
      }
    ]
  })
}))

beforeEach(cleanup)

describe('<Tasks />', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('renders tasks', () => {
    useSelectedProjectValue.mockImplementation(() => ({
      setSelectedProject: jest.fn(() => 'INBOX'),
      selectedProject: 'INBOX'
    }))

    const { queryByTestId, getByText } = render(<Tasks />)
    expect(queryByTestId('tasks')).toBeTruthy()
    expect(getByText('Inbox')).toBeTruthy()
  })

  it('renders a task with a project title', () => {
    useSelectedProjectValue.mockImplementation(() => ({
      setSelectedProject: jest.fn(() => '1'),
      selectedProject: '1'
    }))

    const { queryByTestId, getByText } = render(<Tasks />)
    expect(queryByTestId('tasks')).toBeTruthy()
    expect(getByText('THE OFFICE')).toBeTruthy()
  })

  it('renders a task with a collated title', () => {
    useSelectedProjectValue.mockImplementation(() => ({
      setSelectedProject: jest.fn(() => 'Inbox'),
      selectedProject: 'INBOX'
    }))

    const { queryByTestId, getByText } = render(<Tasks />)
    expect(queryByTestId('tasks')).toBeTruthy()
    expect(getByText('Inbox')).toBeTruthy()
  })
})
