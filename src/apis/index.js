const base_url = 'https://api.jikan.moe/v3'

export const getSearchURL = (query) =>
  `${base_url}/search/anime?q=${query}&page=1`

export const getAnimeDetailsURL = (id) => `${base_url}/anime/${id}`
