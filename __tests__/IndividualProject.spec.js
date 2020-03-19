import { render, cleanup, fireEvent, getByTestId } from '@testing-library/react'
import IndividualProject from '../components/IndividualProject'
import { useProjectsValue } from '../context/ProjectsContext'

beforeEach(cleanup)

jest.mock('../context/SelectedProjectContext', () => ({
  useSelectedProjectValue: jest.fn(() => ({
    setSelectedProject: jest.fn(() => 'INBOX')
  }))
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

describe('<IndividualProject />', () => {
  const project = {
    name: 'THE OFFICE',
    projectId: '1',
    userId: 'JHQssoAQ496Ygn1mTuM1',
    docId: 'kamil-t'
  }

  describe('Success', () => {
    it('renders our project', () => {
      const { getByText } = render(<IndividualProject project={project} />)
      expect(getByText('THE OFFICE')).toBeTruthy()
    })

    it('renders the delete overlay and then deletes a project using onClick', () => {
      const { queryByTestId, getByText } = render(
        <IndividualProject project={project} />
      )

      fireEvent.click(queryByTestId('delete-project'))
      expect(
        getByText('Are you sure you want to delete this project?')
      ).toBeTruthy()

      fireEvent.click(getByText('Delete'))
    })

    it('renders the delete overlay and then deletes a project using onKeyDown', () => {
      const { queryByTestId, getByText } = render(
        <IndividualProject project={project} />
      )

      fireEvent.keyDown(queryByTestId('delete-project'))
      expect(
        getByText('Are you sure you want to delete this project?')
      ).toBeTruthy()

      fireEvent.keyDown(getByText('Delete'))
    })

    it('renders the delete overlay and then cancels using onClick', () => {
      const { queryByTestId, getByText } = render(
        <IndividualProject project={project} />
      )

      fireEvent.click(queryByTestId('delete-project'))
      expect(
        getByText('Are you sure you want to delete this project?')
      ).toBeTruthy()

      fireEvent.click(getByText('Cancel'))
    })

    it('renders the delete overlay and then cancels using onKeyDown', () => {
      const { queryByTestId, getByText } = render(
        <IndividualProject project={project} />
      )

      fireEvent.keyDown(queryByTestId('delete-project'))
      expect(
        getByText('Are you sure you want to delete this project?')
      ).toBeTruthy()

      fireEvent.keyDown(getByText('Cancel'))
    })
  })
})
