export function Header ({ title, text }) {
  const componentStyle = {
    color: 'white',
    marginBottom: '5rem',
    display: 'flex',
    justifyContent: 'center'
  }

  return (
    <div style={componentStyle}>
      <h1>{title}</h1>
    </div>
  )
}
