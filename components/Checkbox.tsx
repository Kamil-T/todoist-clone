import firebase from '../firebase'

const Checkbox = ({ id, taskDesc }) => {
  const archiveTask = () => {
    firebase
      .firestore()
      .collection('tasks')
      .doc(id)
      .update({
        archived: true
      })
  }

  return (
    <div
      className='checkbox-holder'
      data-testid='checkbox-action'
      aria-label={`Mark ${taskDesc} as done`}
      role='button'
      tabIndex={0}
      onClick={() => archiveTask()}
      onKeyDown={() => archiveTask()}>
      <span className='checkbox' />
    </div>
  )
}
export default Checkbox
