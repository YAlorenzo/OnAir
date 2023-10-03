import { useSelector } from 'react-redux'
import { appstore, bottomLogo, googleplay } from '../assets'
import { footerMap, socialMedia } from '../constants'
import { selectPopularMovies, selectPopularSeries } from '../redux/selectors'

function Bottom() {
  const movies = useSelector(selectPopularMovies);
  const series = useSelector(selectPopularSeries);
  return (
    <footer className='bg-[#191919] w-full pb-7'>
      <div className='fix-container flex justify-between flex-wrap items-center'>
        
        <div className='max-w-xs'>
           <img src={bottomLogo} alt="logo" className="w-[170px] max-sm:mx-auto mt-12" />
              <p className="text-[#8D8D8D] text-base font-normal max-sm:text-center mt-10">
                  Hot Africa,
                  we offer original,
                  exclusive and premium stories.
                  Everything you want to watch,
                  anytime, anywhere and as much.
             </p>
         <div className='flex justify-between flex-wrap mt-8'>
          <img src={appstore} alt="appstore" />
          <img src={googleplay} alt="googleplay" />
        </div>
        
        <div className='flex max-sm:justify-center max-sm:items-center  gap-5 mt-8'>
          {socialMedia.map((elem) => (
            <div key={elem.name} className='flex justify-center items-center rounded-full 
            border border-[#363636] cursor-pointer w-10 h-10'>
              <img src={elem.icon} alt="icon" width={24} height={24}/>
            </div>
          ))}
        </div>
          
        <div className='flex gap-4 mt-8'>
          {footerMap.map((elem) => (
            <p key={elem.text} className='text-base font-medium text-[#616161] cursor-pointer
             hover:text-slate-400 transition-colors'>
              {elem.text}
            </p>
          ))}
        </div>

        <p className='text-base font-normal text-[#616161] mt-4'>
          Copyright © 2022 Hot Africa. <br />
          All rights reserved.
        </p>
        </div>
        <div className="flex-wrap gap-16 justify-between hidden sm:flex">
            
          <div>
          <p className='text-white text-2xl font-bold'>Movies</p>
          <ul className='mt-5'>
            {movies.slice(0, 8).map((elem) => (
              <li key={elem.id} className="text-lg font-normal text-[#797979]
               hover:text-slate-400 cursor-pointer transition-colors mb-3 last:mb-3">
                {elem.title}
              </li>
            ))}
          </ul>
        </div>
        <div>
            <p className='text-white text-2xl font-bold'>Series</p>
          <ul className='mt-5'>
            {series.slice(0, 8).map((elem) => (
              <li key={elem.id} className="text-lg font-normal text-[#797979]
               hover:text-slate-400 cursor-pointer transition-colors mb-3 last:mb-3">
                {elem.name}
              </li>
            ))}
          </ul>
        </div>

        </div>
      </div>
    </footer>
  )
}

export default Bottom