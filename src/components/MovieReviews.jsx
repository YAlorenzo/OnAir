import { useSelector } from "react-redux"
import { selectMovieById, selectMovieReviewsById, selectSerieReviewsById, selectSeriesById } from "../redux/selectors"
import { useDate } from "../hooks/useDate";
import EditIcon from '@mui/icons-material/Edit';
import PropTypes  from "prop-types";

function MovieReviews({ category }) {
  const movieRev = useSelector(selectMovieReviewsById);
  const serieRev = useSelector(selectSerieReviewsById);  
  const movie = useSelector(selectMovieById);
  const series = useSelector(selectSeriesById);
  const reviews = category === 'movies' ? movieRev : serieRev;
  const movieInfo = category === 'movies' ? movie : series;
  

  const formatDate = useDate;
  const movieTitle = (title) => {
    if (title) {
      return title.toLowerCase().replace(/ /g, '-')
    }
    return '';
  }
  return (
    <div className="fix-container text-white sm:mt-16">
        <h2 className="text-3xl sm:text-6xl font-normal my-9">
          Reviews
        </h2>
        <div>
          {reviews.map((user) => (
            <div key={user.id} className="mb-7">
             <h2 className="text-lg sm:text-3xl font-light mb-4 ">
                Written by
                <a href={`https://www.themoviedb.org/u/${user.author_details.username}`}
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="underline mx-2 hover:text-[#E13C52] transition-colors">
                  {user.author_details.username}
                </a>
                {formatDate(user.created_at)}
             </h2>
             <p className="text-base font-normal text-[#A7A7A7] ">
                      {user.content}          
             </p>
             </div>
                    
            ))}
      </div>
      <div>
        {reviews.length === 0 ? (
          <div className="text-2xl sm:text-4xl font-light">
            <p>Oops, No reviews. </p>
            <div className="flex items-baseline flex-wrap mt-3 ">
              <p className="mr-4">But you can be the first</p>
              <a href={
                category === 'movies' ? `https://www.themoviedb.org/movie/${movieInfo.id}-${movieTitle(movieInfo.original_title)}/reviews`
                  : 
                `https://www.themoviedb.org/tv/${movieInfo.id}-${movieTitle(movieInfo.name)}/reviews`
                }
                target="_blank" 
                rel="noopener noreferrer"
                className="underline hover:text-[#E13C52] transition-colors">
                click to write review
              </a>
            </div>
          </div>
        )
          : (
            <a href={
                category === 'movies' ? `https://www.themoviedb.org/movie/${movieInfo.id}-${movieTitle(movieInfo.original_title)}/reviews`
                  : 
                `https://www.themoviedb.org/tv/${movieInfo.id}-${movieTitle(movieInfo.name)}/reviews`
                }
               target="_blank" 
               rel="noopener noreferrer"
              className='text-sm font-medium mt-4 sm:text-xl max-sm:mx-auto rounded-full 
               bg-[#E13C52] hover:bg-white hover:text-[#E13C52] 
              transition-colors flex justify-center items-center px-8 py-2 max-w-max sm:mt-20'>
              <EditIcon className="mr-2"/>
              Write Review
            </a>
        )  
      }
        
      </div>
    </div>
  )
}
MovieReviews.propTypes = {
  category: PropTypes.string,
}


export default MovieReviews