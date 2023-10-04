import { useDispatch } from "react-redux";
import { search } from "../assets"
import { navLinks } from "../constants"

import PropTypes from 'prop-types';
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { fetchSearchMulti } from "../redux/moviesOperotion";

function MobileMenu({ active, close }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState('');

  const handelChangeInput = (evnt) => {
    setSearchValue(evnt.target.value);
  }
  const handelClickSearch = () => {
   
    const searchParams = {
      query: searchValue,
      page: 1
    }
    dispatch(fetchSearchMulti(searchParams));
    navigate(`/search/multi/${searchValue}`);
    close(false);
  }
    return (
     <div className={`${active ? 'menuOpen' : 'menuClose'} w-full h-full bg-black opacity-[0.9] filter z-10 p-5`} >
        <div className="rounded-lg flex items-center gap-2 bg-[#232229] bg-opacity-30 w-full h-12 pl-4">
          <img src={search} alt="search" width={20} height={20} onClick={handelClickSearch}/>
          <input type="text" placeholder="Search" className="bg-transparent text-white text-lg" onChange={handelChangeInput}/>
        </div>
         <ul>
            {navLinks.map((link) => (
              <li key={link.name} className="text-white leading-normal text-2xl cursor-pointer mt-6 
              sm:mt-7 sm:text-4xl">
                <Link href="#" to={link.path}
                  className="hover:bg-[#E13C52] transition-colors rounded-3xl w-min p-2" onClick={() => close(false)} >
                  {link.name} 
                </Link>
            </li>
            ))}
          </ul>
     </div>
  )
}

MobileMenu.propTypes = {
  active: PropTypes.bool,
  close: PropTypes.func
};

export default MobileMenu