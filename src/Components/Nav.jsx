import {headerLogo} from "../nike_landing_assets/assets/images";
import {hamburger} from "../nike_landing_assets/assets/icons";
import { navLinks } from "../constants";
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import useScroll from '../../helpers/useScroll';
import ThemeSwitch from './ThemeSwitch';
import { useState } from 'react';


const SearchOverlay = ({ isOpen, onClose }) => {
  const popularSearches = ["Air Force 1", "Jordan", "Air Max", "Blazer"];
  
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-white dark:bg-gray-900 z-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Search Bar */}
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center flex-1 bg-gray-200 dark:bg-gray-800 rounded-full p-2">
            <MagnifyingGlassIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
            <input
              autoFocus
              type="text"
              placeholder="Search"
              className="w-full ml-4 bg-transparent border-none outline-none text-lg dark:text-white"
            />
          </div>
          <button onClick={onClose} className="p-2 text-gray-600 dark:text-gray-400 text-lg font-medium">
            Cancel
          </button>
        </div>

         {/* Popular Search Terms */}
         <div className="mt-6">
          <h3 className="text-lg font-semibold mb-4 dark:text-gray-200">Popular Search Terms</h3>
          <ul className="space-y-4">
            {popularSearches.map((term) => (
              <li key={term}>
                <a 
                  href="#" 
                  className="text-lg text-gray-900 dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-300 no-underline"
                  onClick={(e) => {
                    e.preventDefault();
                    console.log(`Searched for: ${term}`);
                  }}
                >
                  {term}
                </a>
              </li>
            ))}
          </ul>
        </div>        
        </div>
        </div>
  );
};
        

const Nav = () => {
  const [isScrollingUp, isScrollingDown] = useScroll();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  return (
    <>
    {/* Render SearchOverlay Above Header */}
    <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

    <header className={`dark:bg-[#1C1C1C] bg-white padding-x py-8  w-full shadow-2xl fixed  z-20 transition-transform duration-700 transform ${
      isScrollingDown ? '-translate-y-full' : ''
    }${isScrollingUp ? 'translate-y-0' : ''}`} >
        <nav className="flex justify-between items-center max-container">
            <a href="/"> 
            <img src={headerLogo} alt="Logo" width={130} height={29} />
            </a>
            <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
                {navLinks.map((item) =>{
                    return (
                    <li key={item.label}>
                        <a href={item.href} className="font-montserrat leading-normal text-lg text-slate-gray">
                            {item.label}
                        </a>
                    </li>
                    );
                })}
            </ul>
            <div className="flex items-center justify-center gap-x-2">
            {/* Search Button */}
            <div 
              onClick={() => setIsSearchOpen(true)}
              className="flex items-center justify-center sm:bg-transparent sm:p-2 rounded-full overflow-hidden sm:border dark:border-gray-500 cursor-pointer"
            >
              <MagnifyingGlassIcon className="mr-3 h-6 w-6 transition duration-300 cursor-pointer text-slate-gray dark:text-coral-red" />
              <span className="hidden sm:block text-slate-gray dark:text-slate-400 font-semibold">
                Search
              </span>
            </div>
            <ThemeSwitch />
            <div className="hidden max-lg:block">
                <img src={hamburger} alt="Hamburger" width={25} height={25} />
            </div>
            </div>
        </nav>
    </header>
    </>
  )
};

export default Nav