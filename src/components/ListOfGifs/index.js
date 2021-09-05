import Spinner from '../Spinner'
import useGifs from '../../hooks/useGifs';

import Gif from "../Gif";

const ListOfGifs = ({ params }) => {
  const { keyword, id } = params;
  const {loading, gifs} = useGifs({ keyword, id })

  return <>
    {
      loading ?
      <Spinner />
      : gifs.map(({ id, title, url }) => {
        return <Gif key={id} id={id} title={title} url={url} />;
      })
    }
  </>
};

export default ListOfGifs;
