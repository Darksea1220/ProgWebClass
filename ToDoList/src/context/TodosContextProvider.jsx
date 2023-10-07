import { TodosContext } from './TodosContext'
import { useState } from 'react'
import { initTodosState } from '../const/initTodosState'

export function TodosContextProvider ({ children }) {
  const [todos, setTodos] = useState(initTodosState)
  const [filter, setFilter] = useState('all')

  return (
    <TodosContext.Provider value={{
      todos,
      setTodos,
      filter,
      setFilter
    }}
    >
      {children}
    </TodosContext.Provider>
  )
}
