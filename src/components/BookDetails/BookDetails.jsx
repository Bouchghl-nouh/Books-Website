
import {useState,useEffect} from 'react';
import { useParams ,useNavigate} from 'react-router-dom';
import Loader from '../Loader/Loader'
import {FaArrowLeft} from 'react-icons/fa';
import coverImg from '../../images/cover_not_found.jpg'
import './BookDetails.css';
const URL = "https://openlibrary.org/works/";
const BookDetails = () => {
  const {id} = useParams();
  const [loading,setLoading] = useState(false);
  const navigate = useNavigate();
  const [book,setBook] = useState(null);
  const fetchingTheBook = async()=>{
    try{
      setLoading(true)
      const response = await fetch(`${URL}${id}.json`);
      const data = await response.json();
      if(data){
        const {description,title,covers,subject_places,subject_times,subjects} = data ;
        const newBook = {
          description : description ? description.value : "No description found",
          title,
          cover_img:covers?`https://covers.openlibrary.org/b/id/${covers[0]}-L.jpg` : coverImg,
          subject_places: subject_places? subject_places.join(", ") : "No subject places found",
          subject_times: subject_times ? subject_times.join(", ") : "No subject times found",
          subjects : subjects ? subjects.join(", ") : "No subjects found"
        } ;
        
        setBook(newBook);
        setLoading(false);
      }else{
        setBook(null);
        setLoading(false);
      }
    }catch(e){
      console.log(e);
    }

  }
useEffect(()=>{
  fetchingTheBook() ;
},[id]) ;
  return (
    <div className='book-details'>
      {loading ? <Loader /> : 
      <div className='content'>
       <button  onClick={()=> navigate("/book")}>
       <FaArrowLeft  size={20}/> <span> Go Back</span>
       </button>
       <div className='book-details-content'>
         <img src={book?.cover_img} alt="" width={300} height={500} />
         <div className="book-details-info">
           <h4>{book?.title}</h4>
           <p>{book?.description}</p>
           <span>Subject Places : </span> <p>{book?.subject_places}</p>
           <span>Subject Times: </span> <p>{book?.subject_times}</p>
           <span>Subjects: </span> <p>{book?.subjects}</p>
         </div>
       </div>
       </div>}
     
    </div>
  )
}

export default BookDetails