import { useState } from "react"
import { close, logo, menuIcon, search } from "../assets"
import { navLinks } from "../constants"
import MobileMenu from "./MobileMenu";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchSearchMulti } from "../redux/moviesOperotion";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [stateMobileMenu, setStateMobileMenu] = useState(false);
  const [searchValue, setSearchValue] = useState('');



  const handelChangeInput = (evnt) => {
      setSearchValue(evnt.target.value.trim());    
  }
  
  const handelClickEnter = (evnt) => {
    if (evnt.key === 'Enter') {
      const searchParams = {
      query: searchValue,
      page: 1
    }
      dispatch(fetchSearchMulti(searchParams));
      if (searchValue.trim().length !== 0) {
      navigate(`/search/multi/${searchValue}`);
    }  
    }
  }
  const handelClickSearch = () => {
   
    const searchParams = {
      query: searchValue,
      page: 1
    }
    dispatch(fetchSearchMulti(searchParams));
   dispatch(fetchSearchMulti(searchParams));
      if (searchValue.trim().length !== 0) {
      navigate(`/search/multi/${searchValue}`);
    } 
  }
  return (
    <>
       <nav className="bg-black bg-opacity-30 pt-5 pb-5 relative">
      <div className="fix-container flex flex-1 justify-between">
        <img src={logo} alt="logo" width={95} />
        <div className="hidden lg:flex items-center justify-between w-full ml-14">
          <ul className="flex gap-5">
              {navLinks.map((link) => (
              <NavLink key={link.name} to={link.path} className="xl:mr-5 last:mr-0 text-white rounded-3xl leading-normal text-2xl cursor-pointer">
                   <li >
                <p href="#" className="flex justify-center items-center hover:bg-[#E13C52] transition-colors
                gap-4 rounded-3xl pl-9 pr-9">
                  {link.name} 
                </p>
               </li>
              </NavLink>
             
          ))}
          </ul>
          <div className="w-80 rounded-lg flex items-center gap-2 bg-black bg-opacity-30 h-full pl-4">
            <img src={search} alt="search" width={20} height={20} onClick={handelClickSearch} />
              <input type="text" placeholder="Search" className="bg-transparent text-white text-lg"
                onChange={handelChangeInput} onKeyDown={handelClickEnter} />
          </div>
          </div>
          {stateMobileMenu ? (
            <img src={close} alt="menuclose" width={30} height={30} className="block lg:hidden"
             onClick={() => setStateMobileMenu((prev) => !prev)} />
          )
            :
            (
             <img src={menuIcon} alt="menuIcon" width={30} height={30} className="block lg:hidden"
          onClick={() => setStateMobileMenu((prev) => !prev)} /> 
          )
        }
        
      </div>
      </nav>
      <MobileMenu active={stateMobileMenu} close={setStateMobileMenu} />
    </>
   
   
  )
}

export default Header