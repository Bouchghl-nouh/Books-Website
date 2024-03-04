
import './App.css'
import {createContext,useState,useContext,useEffect,useCallback} from 'react';
const AppContext = createContext();
const URL = "http://openlibrary.org/search.json?title=";
const App = ({children}) => {
  const [search,setSearch]= useState('the lost world');
  const [books,setBooks] = useState([]);
  const [loading,setLoading] = useState(true);
  const fetchBooks = useCallback(async()=>{
    try{
      setLoading(true);
      const response = await fetch(`${URL}${search}`);
      const data = await response.json();
      const {docs} = data;
      if(docs){
        const newBooks = docs.slice(0,30).map((book)=>{
          const {key,author_name,cover_i,edition_count,first_publish_year,title}= book;
          return {
            id:key,
            author:author_name,
            cover_id:cover_i,
            edition_count,
            first_publish_year,
            title
          }

        });
        setBooks(newBooks);
        setLoading(false);
      }else{
        setBooks([]);
      }
    }catch(e){
      console.log(e);
      setLoading(false);
    }
  },[search])
  useEffect(()=>{
    fetchBooks();
  },[search])
  return (
  <AppContext.Provider value={{loading,books, search,setSearch,setBooks,setLoading}}>
    {children}
  </AppContext.Provider>
  )
}

export const useGlobalContext = () =>{
  return useContext(AppContext);
}
export {AppContext,App};
