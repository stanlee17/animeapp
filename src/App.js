import React, { useState } from 'react'
import axios from 'axios'
import Header from './components/Header'
import Form from './components/Form'
import Content from './components/Content'
import Info from './components/Info'
import { getSearchURL } from './apis'
import { Route, Switch } from 'react-router-dom'
import './scss/style.css'

function App() {
  // State
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
      <Switch>
        <Route exact path="/">
          <Form
            query={query}
            setQuery={setQuery}
            searchHandler={searchHandler}
            animeList={animeList}
          />
          <Content animeList={animeList} />
        </Route>
        <Route path="/anime/:id">
          <Info />
        </Route>
      </Switch>
    </div>
  )
}

export default App
