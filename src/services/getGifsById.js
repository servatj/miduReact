const fromApiResponseToGifs = apiResponse => {
  const {data} = apiResponse
  const {images, title, id} = data
  const { url } = images.downsized_medium
  return { title, id, url }
}

export default function getSingleGif ({ id }) {
  const { API_KEY, API_URL } = process.env;
  return fetch(`${API_URL}/gifs/${id}?api_key=${API_KEY}`)
    .then(res => res.json())
    .then(fromApiResponseToGifs)
}