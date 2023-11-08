import { useSelector } from "react-redux";
import { selectNewMovies, selectNewSeries, selectPopularMovies, selectPopularSeries } from "../redux/selectors";
import { arrow, noPoster } from "../assets";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";


function MoviesList({ label, category }) {
  const popularMovies = useSelector(selectPopularMovies);
  const popularSeries = useSelector(selectPopularSeries);
  const newMovies = useSelector(selectNewMovies);
  const newSeries = useSelector(selectNewSeries);

  const [showAll, setShowAll] = useState(false);
  const [movies, setMovies] = useState([]);
  const moviesList =  showAll ? movies : movies.slice(0, 6);
  const baseUrl = "https://image.tmdb.org/t/p/original";
  
  useEffect(() => {
     switch (category) {
       case 'PM':
        setMovies(popularMovies);
        break;
       case 'PS':
        setMovies(popularSeries);
        break;
       case 'NM':
        setMovies(newMovies);
         break;
       case 'NS':
        setMovies(newSeries);
         break;
       default:
         console.log(category);
    }    
  }, [newMovies, popularMovies, newSeries, popularSeries, category])
  
  return (
          <>
            <div className="flex mt-10 mb-3 sm:mt-16 sm:mb-9 items-center">
        <p className="text-lg font-normal text-white sm:mr-16 sm:text-4xl">{label}</p>

        <p className="text-white ml-5 sm:ml-0 text-base font-normal underline cursor-pointer mr-3 
        start_animate_arrow hover:scale-[1.1] transition-transform" onClick={() => setShowAll((prev) => !prev)}>
          {showAll ?
            (
            'Close all'
          )
          : (
             'View all'
          )
        }
        </p> 

        <img src={arrow} alt="arrow" width={10} height={10} className="animate_arrow transition-transform"/>
      </div>
      <ul className= {`flex max-sm:flex-wrap justify-center ${showAll && 'flex-wrap justify-center sm:items-center sm:justify-center'} items-center sm:justify-start sm:items-start gap-2 sm:gap-5`} >
        {
          category === 'PS' || category === 'NS' ? 
          moviesList.map((elem) => (
               <li key={elem.id} className='w-28 hover:scale-110 transition-transform cursor-pointer sm:w-1/6'>
              <Link to={`/series/${elem.id}`}>
             
                  <img src={elem.poster_path ? `${baseUrl}${elem.poster_path}` : `${noPoster}`} alt="pposter" className='w-full block' />
                
                </Link>
                  </li>  
          )) 
            :
            moviesList.map((elem) => (
                <li key={elem.id} className='w-28 hover:scale-110 transition-transform cursor-pointer sm:w-1/6'>
                  <Link to={`/movies/${elem.id}`}>
                     <img src={`${baseUrl}${elem.poster_path}`} alt="poster" className='w-full block' />
                  </Link>
                  </li>
          )) 
        }     
      </ul>      
    </>
      ) 
}
MoviesList.propTypes = {
  category: PropTypes.string,
  label: PropTypes.string
}

export default MoviesList