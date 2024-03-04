
import Navbar from '../Navbar/Navbar'
import SearchFrom from '../../components/SearchForm/SearchForm' ;
import './Header.css' ;
const Header = () => {
  return (
    <>
    <Navbar/>
    <div className='Header-content'>
    <div className='Header'>
      <h1>Find Your Book Of Choice.</h1>
      <p>Welcome to  Books– your one-stop destination for book lovers! Dive into a world of literary delights as we present to you an exquisite collection of books spanning across various genres, captivating stories, and enriching narratives.</p>
      <SearchFrom/>
    </div>
    </div>
    </>
  )
}

export default Header