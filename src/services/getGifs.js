export default async function requestGifs({ keyword='morty' }) {
        try {
          const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_API_KEY}&q=${keyword}&limit=5&offset=0&rating=G&lang=en`)
          return await response.json().then(({data}) => data.map(image => {
              const { images, title, id } = image;
              const { url } = images.downsized_medium;
              return { title, id, url };
           }));
        } catch (err) {
          console.log('error when fetching gifs', err)
        }
}