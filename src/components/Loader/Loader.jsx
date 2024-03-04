
import imgLoader from '../../images/loader.svg';
import './Loader.css'
const Loader = () => {
  return (
    <div className='loading'>
        <img src={imgLoader} alt="Loading ..." width={100} height={100}/>
    </div>
  
  )
}

export default Loader