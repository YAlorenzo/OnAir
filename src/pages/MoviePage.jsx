import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom"
import { fetchMovieReviewsById, fetchMoviesById, fetchSerieById, fetchSerieReviewsById } from "../redux/moviesOperotion";
import HeroMoviePage from "../components/HeroMoviePage";
import MovieReviews from "../components/MovieReviews";
import ScrollToTopOnMount from "../components/ScroollToTopMount";

function MoviePage() {
    const dispatch = useDispatch();
  const { category, movieId } = useParams();
  
  useEffect(() => {
    console.log(category);
    if (category === 'movies') {
      dispatch(fetchMoviesById(movieId));
      dispatch(fetchMovieReviewsById(movieId));
    }
    else {
      dispatch(fetchSerieById(movieId));
      dispatch(fetchSerieReviewsById(movieId));
    }
    }, [category, movieId, dispatch])
  return (
    <>
       <ScrollToTopOnMount />
    <div className="bg-black pb-10 ">
       <HeroMoviePage category={category} />
        <MovieReviews category={category} movieId={movieId} /> 
    </div>
    </>
   
     
   
  )
}

export default MoviePage