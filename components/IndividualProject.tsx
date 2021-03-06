import { useState } from 'react'
import { FaTrashAlt } from 'react-icons/fa'
import { useSelectedProjectValue } from '../context/SelectedProjectContext'
import { useProjectsValue } from '../context/ProjectsContext'
import firebase from '../firebase'

const IndividualProject = ({ project }) => {
  const [showConfirm, setShowConfirm] = useState<boolean>(false)
  const { projects, setProjects } = useProjectsValue()
  const { setSelectedProject } = useSelectedProjectValue()

  const deleteProject = docId => {
    firebase
      .firestore()
      .collection('projects')
      .doc(docId)
      .delete()
      .then(() => {
        setProjects([...projects])
        setSelectedProject('INBOX')
      })
  }

  return (
    <>
      <span className='sidebar__dot'>•</span>
      <span className='sidebar__project-name'>{project.name}</span>
      <span
        className='sidebar__project-delete'
        data-testid='delete-project'
        tabIndex={0}
        role='button'
        aria-label='Confirm deletion of project'
        onClick={() => setShowConfirm(!showConfirm)}
        onKeyDown={() => setShowConfirm(!showConfirm)}>
        <FaTrashAlt />
        {showConfirm && (
          <div className='project-delete-modal'>
            <div className='project-delete-modal__inner'>
              <p>Are you sure you want to delete this project?</p>
              <button
                type='button'
                aria-label='Delete project'
                onClick={() => deleteProject(project.docId)}
                onKeyDown={() => deleteProject(project.docId)}>
                Delete
              </button>
              <button
                type='button'
                aria-label='Cancel'
                onClick={() => setShowConfirm(!showConfirm)}
                onKeyDown={() => setShowConfirm(!showConfirm)}>
                Cancel
              </button>
            </div>
          </div>
        )}
      </span>
    </>
  )
}

export default IndividualProject
