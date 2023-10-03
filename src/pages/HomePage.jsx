import Hero from "../components/Hero"
import MoviesList from "../components/MoviesList"

function HomePage() {
  return (
      <div className="bg-moviePage pb-10">
          <Hero />
          <div className='fix-container'>
            <MoviesList category='PM' label='Popular Movies' />
            <MoviesList category='PS' label='Popular Series' />
            <MoviesList category='NM' label='New Movies' />
            <MoviesList category='NS' label='On the Air Series' />
          </div>
      </div>
  )
}

export default HomePage