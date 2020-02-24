import { createContext, useState, useContext } from 'react'

export const SelectedProjectContext = createContext()

const SelectedProjectProvider = ({ children }) => {
  const [selectedProject, setSelectedProject] = useState('INBOX')

  return (
    <SelectedProjectContext.Provider
      value={{ selectedProject, setSelectedProject }}>
      {children}
    </SelectedProjectContext.Provider>
  )
}

export default SelectedProjectProvider

export const useSelectedProjectValue = () => useContext(SelectedProjectContext)
