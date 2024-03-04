
import { useNavigate } from 'react-router-dom';
import {useState} from 'react';
import './SearchForm.css';
import { useGlobalContext } from '../../App';

import {FaSearch} from 'react-icons/fa';
const SearchForm = () => {
const {setSearch}  = useGlobalContext();
const [input,setInput] = useState('');
const navigate = useNavigate();
const handleSubmit = (e)=>{
e.preventDefault();
setSearch(input);
navigate("/book");
}
const handleChange = (e)=>{
  setInput(e.target.value);
}

  return (
    <div className='search-form'> 
        <form className='search-form' onSubmit={handleSubmit}> 
          <div className="search-form-elem">
            <input type='text' className='form-control' placeholder='search for title...' value = {input} onChange={handleChange}/>
            <button type='submit' onSubmit={handleSubmit}>
              <FaSearch size={20}  style={{color:"purple"}}/>
            </button>
          </div>
        </form>
      </div>
    
     
    
   
  )
}

export default SearchForm