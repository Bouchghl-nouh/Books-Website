
import { useGlobalContext } from '../../App';
import Loader from '../Loader/Loader'
import Book from './Book';
import coverImg from '../../images/cover_not_found.jpg'
import './BookList.css';
const BookList = () => {
  const {books,loading} = useGlobalContext();
  const booksWithCover = books.map((book)=>{
    return ({
      ...book,
      id:(book.id).replace("/works/",""),
      cover_img:book.cover_id?`https://covers.openlibrary.org/b/id/${book.cover_id}-L.jpg` : coverImg
      
    })
  })
    return (
      <>
     {loading ? <Loader /> :<div className='Books'>
      {loading? <Loader/> :  booksWithCover.map(book => {
        return <Book key={book.id} info= {book} />
      })}
    
    </div>} 
      </>
    
  )
}

export default BookList