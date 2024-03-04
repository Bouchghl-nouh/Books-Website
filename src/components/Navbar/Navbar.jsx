
import img from '../../images/logo.png';
import {Link,NavLink} from 'react-router-dom';
import './Navbar.css' 
const Navbar = () => {
  return (
    <div className='Navbar'> 
    <Link to = "/">
    <div className='book_title'>
    <img src={img} alt="website logo" width={"60"} />
    <h3> Books</h3>
    </div>
    </Link>
   
    <div className='links'>
      <NavLink to="book">HOME</NavLink>
      <NavLink to="about">ABOUT</NavLink>
    </div>
    </div>
  )
}

export default Navbar