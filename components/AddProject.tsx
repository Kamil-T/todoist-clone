import { useState } from 'react'
import firebase from '../firebase'
import { generatePushId } from '../helpers'
import { useProjectsValue } from '../context/ProjectsContext'

const AddProject = ({ shouldShow = false }) => {
  const [show, setShow] = useState(shouldShow)
  const [projectName, setProjectName] = useState('')

  const projectId = generatePushId()
  const { projects, setProjects } = useProjectsValue()

  const addProject = () =>
    projectName &&
    firebase
      .firestore()
      .collection('projects')
      .add({
        projectId,
        name: projectName,
        userId: 'JHQssoAQ496Ygn1mTuM1'
      })
      .then(() => {
        setProjects([...projects])
        setProjectName('')
        setShow(false)
      })
  return (
    <div className='add-project' data-testid='add-project'>
      {show && (
        <div className='add-project__input'>
          <input
            value={projectName}
            onChange={e => setProjectName(e.target.value)}
            className='add-project__name'
            data-testid='project-name'
            type='text'
            placeholder='Name your project'
          />
          <button
            className='add-project__submit'
            type='button'
            onClick={() => addProject()}
            data-testid='add-project-submit'>
            Add Project
          </button>
          <span
            data-testid='hide-project-overlay'
            className='add-project__cancel'
            aria-label='Cancel adding project'
            onClick={() => setShow(false)}
            onKeyDown={() => setShow(false)}
            tabIndex={0}
            role='button'>
            Cancel
          </span>
        </div>
      )}
      <span className='add-project__plus'>+</span>
      <span
        data-testid='add-project-action'
        className='add-project__text'
        aria-label='Add project'
        onClick={() => setShow(!show)}
        onKeyDown={() => setShow(!show)}
        tabIndex={0}
        role='button'>
        Add project
      </span>
    </div>
  )
}

export default AddProject
