import { Button } from '.'
import { useTodos } from '../hooks/useTodos'

export function Footer () {
  const {todos, completedTodosCount, clearAllCompleteTask} = useTodos()
  const footerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1rem 2rem',
    backgroundColor: '#efefef',
    color: 'Black'
  }

  return (
    <footer style={footerStyle}>
      <p>
        <strong>{completedTodosCount} tareas completadas</strong>  de <strong> {todos.length} </strong>
      </p>
      <Button
        type='delete'
        labelText='Clear all completed'
        onClick={clearAllCompleteTask}
      />
    </footer>
  )
}
