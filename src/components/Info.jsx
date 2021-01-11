import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getAnimeDetailsURL } from '../apis/index'
import axios from 'axios'

const Info = () => {
  const { id } = useParams()

  // State
  const [animeDetails, setAnimeDetails] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  console.log(animeDetails)

  const fetchAnimeDetails = async (id) => {
    const getAnimeDetails = await axios.get(getAnimeDetailsURL(id))

    if (!getAnimeDetails.length) {
      setIsLoading(false)
    }

    setAnimeDetails(getAnimeDetails.data)
  }

  useEffect(() => {
    fetchAnimeDetails(id)
  }, [id])

  return (
    <div>
      {isLoading ? (
        <div>
          <h1>Loading...</h1>
        </div>
      ) : (
        <div className="info">
          <img
            src={animeDetails.image_url}
            alt={animeDetails.title}
            className="info__image"
          />
          <div className="info__about">
            <h3>{animeDetails.title}</h3>
            <p>{animeDetails.synopsis}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Info
