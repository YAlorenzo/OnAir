import { useSelector } from 'react-redux';
import { selectMovieById, selectSeriesById } from '../redux/selectors';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from "prop-types";
import StarIcon from '@mui/icons-material/Star';
import { useRunTime } from '../hooks/useRunTime';
import { useRating } from '../hooks/useRating';




function HeroMoviePage({ category }) {
  const movies = useSelector(selectMovieById);
  const series = useSelector(selectSeriesById);
  const notify = () => toast.error('Sorry, the film is not available at the moment',{position: "top-right",autoClose: 5000,hideProgressBar: false,closeOnClick: true,pauseOnHover: true,draggable: true,progress: undefined,theme: "dark", });
  const movie = category === 'movies' ? movies : series
  const runTime = useRunTime;
  const rating = useRating;

  const baseUrl = "https://image.tmdb.org/t/p/original";
  const backgroundImageStyle = {
    backgroundImage: `url(${baseUrl}${category==='movies' ? movie.backdrop_path : series.backdrop_path})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  return (
    <div className='relative h-full'>
      <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-b 
      from-transparent via-transparent to-black opacity-100' />
      <div className='h-[400px]  sm:h-[800px]' style={backgroundImageStyle}></div>
      <div className='absolute bottom-0 left-0 w-full h-full'>
        <div className='absolute w-full h-full bg-gradient-to-l from-transparent to-black opacity-100'>
          <div className='fix-container'>
            <div className='text-white mt-11 sm:mt-40'>
              <h1 className='text-4xl font-bold max-sm:text-center sm:text-8xl sm:font-light'>
                {category==='movies' ? movie.title : series.name}
              </h1>
              <p className='text-sm max-sm:text-center sm:text-2xl font-medium text-[#A7A7A7] mt-5'>
                {category==='movies' ? movie.release_date : series.first_air_date}
                <span className='mx-2'> | </span>
                {runTime(category==='movies' ? movie.runtime : series.episode_run_time)}
                <span className='mx-2'> | </span>
                <StarIcon /> {rating(category==='movies' ? movie.vote_average : series.vote_average)}
              </p>
              <p className='text-sm sm:text-3xl font-light max-w-[600px] mt-5 max-h-[150px] sm:max-h-[300px] 
              overflow-hidden overflow-y-auto'>{category==='movies' ?  movie.overview : series.overview}</p>
              {movie.homepage !== '' ? (
                <a href={category==='movies' ? movie.homepage : series.homepage} className='text-sm font-medium mt-4 sm:text-xl max-sm:mx-auto rounded-full bg-[#E13C52] hover:bg-white hover:text-[#E13C52] 
              transition-colors flex justify-center items-center px-8 py-2 max-w-max sm:mt-12'>
                  Watch Now 
              </a>
              )
                : (
                  <>
                      <p onClick={notify} className='text-sm font-medium mt-4 sm:text-xl max-sm:mx-auto rounded-full bg-[#E13C52] hover:bg-white hover:text-[#E13C52] 
              transition-colors flex justify-center items-center px-8 py-2 max-w-max sm:mt-12'>
                     Watch Now 
                    </p>
                    <ToastContainer
                        position="top-left"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="colored"
                    />
                  </>
                )
            }
             </div>
          </div>
        </div>
      </div>
    </div>
  )
}
HeroMoviePage.propTypes = {
  category: PropTypes.string,
}

export default HeroMoviePage