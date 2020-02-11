import Header from '../components/layout/Header'
import { Content } from '../components/layout/Content'
import '../index.scss'
import ProjectsProvider from '../context/ProjectsContext'
import SelectedProjectProvider from '../context/SelectedProjectProvider'

const Index = () => (
  <SelectedProjectProvider>
    <ProjectsProvider>
      <div className='Index'>
        <Header />
        <Content />
      </div>
    </ProjectsProvider>
  </SelectedProjectProvider>
)

export default Index
