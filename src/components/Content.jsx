import React from 'react'

const Content = ({ animeList }) => {
  return (
    <div className="content">
      {animeList.map((anime) => (
        <div className="content__animelist">
          <img
            className="content__animelist-image"
            src={anime.image_url}
            alt={anime.title}
          />
          <h3 className="content__animelist-title">{anime.title}</h3>
        </div>
      ))}
    </div>
  )
}

export default Content
