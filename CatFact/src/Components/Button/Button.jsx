import './Button.css'

export function Button ({ text }) {
  return (
    <form>
      <button type='submit'>
        {text}
      </button>
    </form>
  )
}
