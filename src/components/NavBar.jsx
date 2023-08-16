import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useRef, useState } from 'react';
import MenuBar from './MenuBar';

function NavBar() {
  const [menuActive, setMenuActive] = useState(false);
  const handleClick = () => {
    setMenuActive(!menuActive);
  };
  const menuRef = useRef();

  if (menuActive) {
    return <MenuBar />;
  } else {
    return (
      <>
        <header className='text-white flex items-center justify-between p-5'>
          <div>
            <FontAwesomeIcon
              onClick={handleClick}
              ref={menuRef}
              className='cursor-pointer text-2xl'
              icon={faBars}
            />
          </div>

          <nav>
            <ul className='text-base sm:text-lg md:text-xl lg:text-2xl flex items-start gap-x-8'>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <a href='#'>Tools</a>
              </li>
              <li>
                <Link to='/about'>About</Link>
              </li>
            </ul>
          </nav>
        </header>
      </>
    );
  }
}

export default NavBar;

// Articles , signUp, LogIn, Contact can be added
