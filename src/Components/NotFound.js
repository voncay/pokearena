import { useNavigate } from 'react-router-dom';

const NotFound = () => {

  const navigate = useNavigate();

  return(
    <>
      <h1>Page not Found</h1>
      <button onClick={ () => navigate('/')}>Home</button>
    </>
  )
}

export default NotFound
