import { collatedTasks } from '../constants'

export const getCollatedTasks = selectedProject =>
  collatedTasks.find(task => task.key === selectedProject)
