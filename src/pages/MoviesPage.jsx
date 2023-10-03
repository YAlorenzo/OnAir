import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchMoviesFilter, getGenresMovies } from "../redux/moviesOperotion";
import Filter from "../components/Filter";
import MoviesPageList from "../components/MoviesPageList";
import { selectGenersMovies } from "../redux/selectors";

function MoviesPage() {
  const dispatch = useDispatch();
  const genersMovies = useSelector(selectGenersMovies); 
    useEffect(() => {
      dispatch(getGenresMovies());

      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
  return (
    <div>
      <Filter geners={genersMovies} fetch={fetchMoviesFilter}/> 
      <MoviesPageList />
    </div>
  )
}

export default MoviesPage