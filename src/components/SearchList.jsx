import { useSelector } from "react-redux"
import { selectSearchCurrentPage, selectSearchMulti, selectSearchTotalPage } from "../redux/selectors"
import { Link } from "react-router-dom";
import { noPoster } from "../assets";
import PaginationRounded from "./PaginationRounded";
import { fetchSearchMulti } from "../redux/moviesOperotion";

function SearchList() {
    const movies = useSelector(selectSearchMulti); 
    const totalPages = useSelector(selectSearchTotalPage);
     const page = useSelector(selectSearchCurrentPage);
    const baseUrl = "https://image.tmdb.org/t/p/original";
    console.log(movies);
  return (
    movies.length === 0 ? (
      <div className="text-white text-9xl text-center my-9"> <b>404</b>  <br /> No Movies</div>
    ) 
      : (
          <div className="fix-container">
               <ul className='flex flex-wrap justify-center mt-10 items-center sm:justify-start sm:items-start gap-2 sm:gap-5'>
              {movies.map((elem) => (
                <li key={elem.id} className='w-28 hover:scale-110 transition-transform cursor-pointer sm:w-52'>
                    <Link to={elem.media_type === 'movie' ? `/movies/${elem.id}` : `/series/${elem.id}`}>
                      <img src={elem.poster_path ? `${baseUrl}${elem.poster_path}` : noPoster} alt="poster" className="w-full"/>
                    </Link>   
                </li>
              ))}     
        </ul>
       
          <PaginationRounded totalPages={totalPages} page={page} fetch={fetchSearchMulti} />
    </div>
      )

    
  )
}

export default SearchList