import { search } from "../assets"
import { navLinks } from "../constants"

import PropTypes from 'prop-types';

function MobileMenu({active}) {
    return (
     <div className={`${active ? 'menuOpen' : 'menuClose'} w-full h-full bg-black opacity-[0.9] filter z-10 p-5`} >
        <div className="rounded-lg flex items-center gap-2 bg-[#232229] bg-opacity-30 w-full h-12 pl-4">
          <img src={search} alt="search" width={20} height={20} />
          <input type="text" placeholder="Search" className="bg-transparent text-white text-lg"/>
        </div>
         <ul>
            {navLinks.map((link) => (
              <li key={link.name} className="text-white leading-normal text-2xl cursor-pointer mt-6 
              sm:mt-7 sm:text-4xl">
                <a href="#" className="hover:bg-[#E13C52] transition-colors rounded-3xl w-min p-2 ">
                  {link.name} 
                </a>
            </li>
            ))}
          </ul>
     </div>
  )
}

MobileMenu.propTypes = {
  active: PropTypes.bool
};

export default MobileMenu