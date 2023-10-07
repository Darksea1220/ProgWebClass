import { Form, List, Filters, Footer } from './components'
import { filters } from './const/filters'
// import { useTodos } from './hooks/useTodos'
import { TodosContextProvider } from './context/TodosContextProvider'

export default function App () {
  // const {
  //   filter,
  //   todos,
  //   createTodo,
  //   handleToggle,
  //   handleDelete,
  //   handleFilterChange,
  //   filteredTodos,
  //   hasTodos,
  //   completedTodosCount,
  //   clearAllCompleteTask
  // } = useTodos(initTodosState)

  return (
    <>
      <TodosContextProvider>
        <div className='container'>
          <h1>Todo List App</h1>
          <header className='header'>
            <Form />
          </header>
          <Filters
            // filters={filters}
            // onChange={handleFilterChange}
            // currentValue={filter}
          />
          <main>
            <List
              // showList={hasTodos}
              // list={filteredTodos}
              // onToggle={handleToggle}
              // onDelete={handleDelete}
            />
          </main>
          <Footer
            // totalTodos={todos.length}
            // completedTodosCount={completedTodosCount}
            // onDelete={clearAllCompleteTask}
          />
        </div>
      </TodosContextProvider>
    </>
  )
}
