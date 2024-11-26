import { useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';

import { logo, menu, close } from '../assets/index.ts';
import enFlag from '../assets/english-flag.png';
import esFlag from '../assets/spain-flag.png';
import { useTranslation } from 'react-i18next';

interface NavLink {
  id: string;
  title: string;
}

const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation();

  // Function to switch language dynamically
  const changeLanguage = (): void => {
    const newLanguage: string = i18n.language.includes('en') ? 'es' : 'en';
    i18n.changeLanguage(newLanguage);
  };

  const [active, setActive] = useState<string>('');
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}>
          <img
            src={logo}
            alt="logo"
            className="w-12 h-12 object-contain rounded-full"
          />
          <p className="text-white text-[18px] font-bold cursor-pointer">
            Gonzalo Arancibia &nbsp;
            <span className="sm:block hidden"> | Software Engineer</span>
          </p>
        </Link>

        {/* Desktop Navigation */}
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link: NavLink) => (
            <li
              key={link.id}
              className={`${
                active === link.id ? 'text-white' : 'text-secondary'
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.id)}>
              <a href={`#${link.id}`}> {t(link.title)}</a>
            </li>
          ))}
          <img
            src={i18n.language.includes('en') ? enFlag : esFlag}
            alt="language"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={changeLanguage}
          />
        </ul>

        {/* Mobile Navigation */}
        <div className="sm:hidden flex flex-1 justify-end gap-5 items-center">
          <img
            src={i18n.language.includes('en') ? enFlag : esFlag}
            alt="language"
            className="w-[28px] h-[28px] object-contain cursor-pointer text-center"
            onClick={changeLanguage}
          />
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? 'hidden' : 'flex'
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link: NavLink) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.id ? 'text-white' : 'text-secondary'
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.id);
                  }}>
                  <a href={`#${link.id}`}> {t(link.title)}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
