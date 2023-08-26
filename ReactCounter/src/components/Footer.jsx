export function Footer ({ finish }) {
  const componentStyle = {
    padding: '5rem',
    color: 'white',
    display: 'flex',
    justifyContent: 'center'
  }

  return (
    <div style={componentStyle}>
      <p>{finish}</p>
    </div>
  )
}
