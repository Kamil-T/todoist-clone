import { render, cleanup } from '@testing-library/react'
import Index from '../pages/index'

beforeEach(cleanup)

describe('<Index>', () => {
  it('renders the application', () => {
    const { queryByTestId } = render(<Index />)
    expect(queryByTestId('application')).toBeTruthy()
  })

  it('renders the application using dark mode', () => {
    const { queryByTestId } = render(<Index darkModeDefault />)
    expect(queryByTestId('application')).toBeTruthy()
    expect(
      queryByTestId('application').classList.contains('darkmode')
    ).toBeTruthy()
  })
})
