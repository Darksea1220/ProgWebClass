import { useEffect, useContext } from 'react'
import { TodosContext } from '../context/TodosContext'

export const useTodos = () => {
  // const [todos, setTodos] = useState(initTodosState)
  // const [filter, setFilter] = useState('all')
  const context = useContext(TodosContext)

  if (!context) {
    throw new Error('This component sould be within a GifsContextrovider Component')
  }
  const { todos, filter, setTodos, setFilter } = context
  useEffect(() => {
    window.localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  useEffect(() => {
    window.localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const createTodo = (title) => {
    const newTodo = {
      id: crypto.randomUUID(),
      title,
      completed: false
    }
    setTodos(prevState =>
      [...prevState, newTodo])
  }

  const handleToggle = (todo) => {
    const { id, completed } = todo
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        const newTodo = {
          ...todo,
          completed
        }
        return newTodo
      }
      return todo
    })
    setTodos(newTodos)
  }

  const handleDelete = (id) => {
    const newTodos = todos.filter((item) => item.id !== id)
    setTodos(newTodos)
  }

  const handleFilterChange = (filterValue) => {
    setFilter(filterValue)
  }

  const filteredTodos = todos.filter(todo => {
    if (filter === 'completed') {
      return todo.completed
    }
    if (filter === 'pending') {
      return !todo.completed
    }
    return todo
  })

  const hasTodos = todos.length > 0

  const completedTodosCount = todos.filter((item) => item.completed).length

  const clearAllCompleteTask = () => {
    const newTasks = todos.filter((item) => !item.completed)
    setTodos(newTasks)
  }

  return {
    filter,
    todos,
    createTodo,
    handleToggle,
    handleDelete,
    handleFilterChange,
    filteredTodos,
    hasTodos,
    completedTodosCount,
    clearAllCompleteTask
  }
}
