import { render, cleanup, fireEvent } from '@testing-library/react'
import ProjectOverlay from '../components/ProjectOverlay'
import { useProjectsValue } from '../context/ProjectsContext'

beforeEach(cleanup)

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

describe('<ProjectOverlay', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  describe('Success', () => {
    it('renders the project overlay and calls setShowProjectOverlay using onClick', () => {
      const showProjectOverlay = true
      const setProject = jest.fn()
      const setShowProjectOverlay = jest.fn(() => !showProjectOverlay)

      const { queryByTestId } = render(
        <ProjectOverlay
          showProjectOverlay
          setProject={setProject}
          setShowProjectOverlay={setShowProjectOverlay}
        />
      )

      expect(queryByTestId('project-overlay')).toBeTruthy()
      fireEvent.click(queryByTestId('project-overlay-action'))
      expect(setProject).toHaveBeenCalled()
    })

    it('renders the project overlay and calls setShowProjectOverlay using onKeyDown', () => {
      const showProjectOverlay = true
      const setProject = jest.fn()
      const setShowProjectOverlay = jest.fn(() => !showProjectOverlay)

      const { queryByTestId } = render(
        <ProjectOverlay
          showProjectOverlay
          setProject={setProject}
          setShowProjectOverlay={setShowProjectOverlay}
        />
      )

      expect(queryByTestId('project-overlay')).toBeTruthy()
      fireEvent.keyDown(queryByTestId('project-overlay-action'))
      expect(setProject).toHaveBeenCalled()
    })
  })

  describe('Failure', () => {
    it('does not render the project overlay with any projects', () => {
      useProjectsValue.mockImplementation(() => ({
        projects: []
      }))

      const { queryByTestId } = render(<ProjectOverlay showProjectOverlay />)
      expect(queryByTestId('project-overlay')).toBeTruthy()
      expect(queryByTestId('project-overlay-action')).toBeFalsy()
    })
  })
})
