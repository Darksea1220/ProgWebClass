import React, { useState } from 'react'
import { Button, Count } from './index'
export function Body (props) {
  const [count, setCount] = useState(0)
  const operation = (sign) => {
    setCount(prevCount => sign === 'sumar' ? prevCount + 1 : prevCount - 1)
  }
  const componentStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: '3rem'
  }

  return (
    <div style={componentStyle}>
      <Button type='restar' className='resta' onClick={() => operation('restar')} />
      <Count count={count} />
      <Button type='sumar' className='suma' onClick={() => operation('sumar')} />
    </div>
  )
}
