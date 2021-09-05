const fromApiResponseToGifs = apiResponse => {
  const {data} = apiResponse
  const {images, title, id} = data
  const { url } = images.downsized_medium
  return [{ title, id, url }]
}

export default function getSingleGif ({ id }) {
  const { REACT_APP_API_KEY, REACT_APP_API_URL } = process.env;
  return fetch(`${REACT_APP_API_URL}/gifs/${id}?api_key=${REACT_APP_API_KEY}`)
    .then(res => res.json())
    .then(fromApiResponseToGifs)
}