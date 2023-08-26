// import React, { useState } from 'react'
export function Button ({ type }) {
  //! para agregar sonido en un futuro
//   const [showContent, setShowContent] = useState(false)

  //   const playSound = () => {
  //     const audio = new Audio('')
  //     audio.play()
  //   }

  //   const toggleContent = () => {
  //     setShowContent(!showContent)
  //     playSound()
  //   }

  const componentStyle = {
    color: 'bisque',
    borderRadius: '100%',
    fontSize: '1em',
    fontWeight: '500',
    fontFamily: 'inherit',
    cursor: 'pointer',
    boxShadow: '0px -10px 0px 1px rgba(0, 0, 0, 0.25) inset',
    filter: 'drop-shadow(0px -10px  rgba(0, 0, 0, 0.25))',
    width: '9.75rem',
    height: '9.75rem',
    backgroundColor: type === 'restar' ? '#A80317' : '#1DA83B'
  }

  return (
    <>
      <button style={componentStyle}>{type}</button>
      {/* para aparecer un gif, en un futuro}
      {{showContent && (
        <div>
          <img src='https://tenor.com/es-419/view/kurukuru-kururing-herta-honkai-star-rail-gif-10795383770265459272' alt='GIF' />
        </div>
      )} */}
    </>
  )
}
