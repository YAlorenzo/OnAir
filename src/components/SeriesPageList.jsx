import { useSelector } from "react-redux"
import { selectSeriesFilter, selectSeriesFilterCurrentGanre, selectSeriesFilterCurrentPage, selectSeriesFilterTotalPage } from "../redux/selectors"
import { Link } from "react-router-dom";
import { noPoster } from "../assets";
import PaginationRounded from "./PaginationRounded";
import { fetchSeriesFilter } from "../redux/moviesOperotion";

function SeriesPageList() {
    const series = useSelector(selectSeriesFilter);
    const page = useSelector(selectSeriesFilterCurrentPage);
    const totalPage = useSelector(selectSeriesFilterTotalPage);
    const genre = useSelector(selectSeriesFilterCurrentGanre);
    const baseUrl = "https://image.tmdb.org/t/p/original";
  return (
      <div className="fix-container">
          <ul className="flex flex-wrap justify-center mt-10 items-center sm:justify-start sm:items-start gap-2 max-xsm:gap-6 sm:gap-5">
              {series.map((elem) => (
                 <li key={elem.id} className="w-28 max-xsm:w-56 hover:scale-110 transition-transform cursor-pointer sm:w-52">
                      <Link to={`/series/${elem.id}`}>
                        <img src={elem.poster_path ? `${baseUrl}${elem.poster_path}` : noPoster} alt="poster" className="w-full"/>
                      </Link>  
                 </li> 
              ))}
          </ul>
        <PaginationRounded totalPages={totalPage} page={page} fetch={fetchSeriesFilter} genreId={genre} />
      </div>
  )
}

export default SeriesPageList