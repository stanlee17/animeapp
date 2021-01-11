import React from 'react'
import { Link } from 'react-router-dom'

const Content = ({ animeList }) => {
  return (
    <div className="content">
      {animeList.map((anime) => (
        <div className="content__animelist">
          <Link to={`/anime/${anime.mal_id}`}>
            <img
              className="content__animelist-image"
              src={anime.image_url}
              alt={anime.title}
            />
          </Link>
          <Link to={`/anime/${anime.mal_id}`}>
            <h3 className="content__animelist-title">{anime.title}</h3>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Content
