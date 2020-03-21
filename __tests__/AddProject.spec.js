import { render, cleanup, fireEvent } from '@testing-library/react'
import AddProject from '../components/AddProject'

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

describe('<AddProject />', () => {
  describe('Success', () => {
    it('renders <AddProject />', () => {
      const { queryByTestId } = render(<AddProject shouldShow />)
      expect(queryByTestId('add-project')).toBeTruthy()
    })

    it('renders <AddProject and add project using onCLick />', () => {
      const { queryByTestId } = render(<AddProject shouldShow />)
      expect(queryByTestId('add-project')).toBeTruthy()

      fireEvent.change(queryByTestId('project-name'), {
        target: { value: 'Best project in the world' }
      })
      expect(queryByTestId('project-name').value).toBe(
        'Best project in the world'
      )
      fireEvent.click(queryByTestId('add-project-submit'))
    })

    it('renders <AddProject and add project using onKeyDown />', () => {
      const { queryByTestId } = render(<AddProject shouldShow />)
      expect(queryByTestId('add-project')).toBeTruthy()

      fireEvent.change(queryByTestId('project-name'), {
        target: { value: 'Best project in the world' }
      })
      expect(queryByTestId('project-name').value).toBe(
        'Best project in the world'
      )
      fireEvent.keyDown(queryByTestId('add-project-submit'))
    })

    it('hides the project overlay when cancelled using onClick', () => {
      const { queryByTestId, getByText } = render(<AddProject shouldShow />)
      expect(queryByTestId('add-project')).toBeTruthy()
      expect(queryByTestId('add-project-inner')).toBeTruthy()

      fireEvent.click(getByText('Cancel'))
      expect(queryByTestId('add-project')).toBeTruthy()
      expect(queryByTestId('add-project-inner')).toBeFalsy()
    })

    it('hides the project overlay when cancelled onKeydown', () => {
      const { queryByTestId, getByText } = render(<AddProject shouldShow />)
      expect(queryByTestId('add-project')).toBeTruthy()
      expect(queryByTestId('add-project-inner')).toBeTruthy()

      fireEvent.keyDown(getByText('Cancel'))
      expect(queryByTestId('add-project')).toBeTruthy()
      expect(queryByTestId('add-project-inner')).toBeFalsy()
    })

    it('hides the project overlay using onClick singular and reverse action', () => {
      const { queryByTestId } = render(<AddProject shouldShow />)
      expect(queryByTestId('add-project')).toBeTruthy()
      expect(queryByTestId('add-project-inner')).toBeTruthy()

      fireEvent.click(queryByTestId('add-project-action'))
      expect(queryByTestId('add-project')).toBeTruthy()
      expect(queryByTestId('add-project-inner')).toBeFalsy()
    })

    it('hides the project overlay using onKeyDown singular and reverse action', () => {
      const { queryByTestId } = render(<AddProject shouldShow />)
      expect(queryByTestId('add-project')).toBeTruthy()
      expect(queryByTestId('add-project-inner')).toBeTruthy()

      fireEvent.keyDown(queryByTestId('add-project-action'))
      expect(queryByTestId('add-project')).toBeTruthy()
      expect(queryByTestId('add-project-inner')).toBeFalsy()
    })
  })
})
