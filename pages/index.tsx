import { useState } from 'react'
import Header from '../components/layout/Header'
import Content from '../components/layout/Content'
import '../index.scss'
import ProjectsProvider from '../context/ProjectsContext'
import SelectedProjectProvider from '../context/SelectedProjectContext'

const Index = ({ darkModeDefault = false }) => {
  const [darkMode, setDarkMode] = useState<boolean>(darkModeDefault)

  return (
    <SelectedProjectProvider>
      <ProjectsProvider>
        <main
          data-testid='application'
          className={darkMode ? 'darkmode' : undefined}>
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />
          <Content />
        </main>
      </ProjectsProvider>
    </SelectedProjectProvider>
  )
}

export default Index
