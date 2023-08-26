import React from 'react'
import { Header, Body, Footer } from './components'

export function App (props) {
  return (
    <>
      <Header title='Contador con React' />
      <Body />
      <Footer finish='algo hice mal que el count ni se inmuta, pero ya ni modo🙃' />

    </>
  )
}
