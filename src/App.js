import React from 'react'
import Header from './components/Header'
import Form from './components/Form'
import Anime from './components/Anime'
import './scss/style.css'

function App() {
  return (
    <div className="container">
      <Header />
      <Form />
      <Anime />
    </div>
  )
}

export default App
