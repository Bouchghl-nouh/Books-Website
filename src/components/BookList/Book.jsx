
import { Link } from 'react-router-dom';
const Book = ({info}) => {
  return (
    <div className='book-container'>  

      <img src={info.cover_img} alt="" width={100} height={150} />
      <div className="book-info">

     <Link to = {`/book/${info.id}`}>   <h5> {info.title}</h5> </Link>
     
        
        <p><strong>Author : </strong>{info.author} </p>
        <p><strong>Total Editions:</strong>{info.edition_count}</p>
        <p><strong>First Publish Year : </strong>{info.first_publish_year}</p>
      </div>
    </div>
  )
}

export default Book