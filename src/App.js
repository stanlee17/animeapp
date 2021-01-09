import React, { useState } from 'react'
import axios from 'axios'
import Header from './components/Header'
import Form from './components/Form'
import Content from './components/Content'
import { getSearchURL } from './apis'
import './scss/style.css'

function App() {
  const [query, setQuery] = useState('')
  const [animeList, setAnimeList] = useState([])

  const searchHandler = (e) => {
    e.preventDefault()
    fetchAnime(query)
    setQuery('')
  }

  const fetchAnime = async (query) => {
    const anime = await axios.get(getSearchURL(query))
    setAnimeList(anime.data.results)
  }

  return (
    <div className="container">
      <Header />
      <Form
        query={query}
        setQuery={setQuery}
        searchHandler={searchHandler}
        animeList={animeList}
      />
      <Content animeList={animeList} />
    </div>
  )
}

export default App
