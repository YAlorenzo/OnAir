import { Link } from "react-router-dom"
import { noPoster } from "../assets"
import { useSelector } from "react-redux"
import { selectMoviesFilter, selectMoviesFilterCurrentGenre, selectMoviesFilterCurrentPage, selectMoviesFilterTotalPage } from "../redux/selectors"
import PaginationRounded from "./PaginationRounded";
import { fetchMoviesFilter } from "../redux/moviesOperotion";

function MoviesPageList() {
  const movies = useSelector(selectMoviesFilter);
  const totalPages = useSelector(selectMoviesFilterTotalPage);
  const page = useSelector(selectMoviesFilterCurrentPage);
  const genre = useSelector(selectMoviesFilterCurrentGenre);
  const baseUrl = "https://image.tmdb.org/t/p/original";
  return (
      <div className="fix-container">
           <ul className='flex flex-wrap justify-center mt-10 items-center sm:justify-start sm:items-start gap-2 sm:gap-5'>
              {movies.map((elem) => (
                <li key={elem.id} className='w-28 hover:scale-110 transition-transform cursor-pointer sm:w-52'>
                    <Link to={`/movies/${elem.id}`}>
                      <img src={elem.poster_path ? `${baseUrl}${elem.poster_path}` : noPoster} alt="poster" className="w-full"/>
                    </Link>   
                </li>
              ))}     
      </ul>
      <PaginationRounded totalPages={totalPages} page={page} fetch={fetchMoviesFilter} genreId={genre} />
      </div>
  )
}

export default MoviesPageList