export function Count ({ count }) {
  const componentStyle = {
    color: 'white',
    paddingLeft: '-10rem',
    paddingRigth: '-10rem'

  }

  return (
    <div style={componentStyle}>
      <h1>{count}</h1>
    </div>
  )
}
