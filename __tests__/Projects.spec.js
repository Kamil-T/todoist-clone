import { render, cleanup, fireEvent } from '@testing-library/react'
import Projects from '../components/Projects'

jest.mock('../context/SelectedProjectContext', () => ({
  useSelectedProjectValue: jest.fn(() => ({
    setSelectedProject: jest.fn(() => 'INBOX')
  }))
}))

jest.mock('../context/ProjectsContext', () => ({
  useProjectsValue: jest.fn(() => ({
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

beforeEach(cleanup)

describe('<Projects', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  describe('Success', () => {
    it('renders the projects', () => {
      const { queryByTestId } = render(<Projects />)

      expect(queryByTestId('project-action')).toBeTruthy()
    })

    it('renders the projects with a project and selects an active project using onClick', () => {
      const { queryByTestId } = render(<Projects activeValue='1' />)
      expect(queryByTestId('project-action')).toBeTruthy()

      fireEvent.click(queryByTestId('project-action'))
      expect(
        queryByTestId('project-action-parent').classList.contains('active')
      ).toBeTruthy()
    })

    it('renders the projects with a project and selects an active project using onKeyDown', () => {
      const { queryByTestId } = render(<Projects activeValue='1' />)
      expect(queryByTestId('project-action')).toBeTruthy()

      fireEvent.keyDown(queryByTestId('project-action'))
      expect(
        queryByTestId('project-action-parent').classList.contains('active')
      ).toBeTruthy()
    })
  })
})
