import { useState } from 'react';

import { HiMenu, HiX } from 'react-icons/hi';
import { Overlay as OverlayComponent } from './Overlay';
import { Navbar } from './Navbar';

export const Header = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const handleMenuToggle = () => setIsMenuActive((prevState) => !prevState);

  const MenuIcon = isMenuActive ? HiX : HiMenu;
  let Overlay = isMenuActive && <OverlayComponent onClick={handleMenuToggle} />;

  return (
    <header className="bg-white">
      <div className="container">
        <div className="h-16 py-3 px-4 flex items-center border-b border-gray-200">
          <div>
            <MenuIcon
              className="text-3xl mr-3 cursor-pointer"
              onClick={handleMenuToggle}
            />
          </div>
          <div>
            <a className="text-2xl font-medium" href="/">
              <span>a|e </span>
              <span>ahmed elaguab</span>
            </a>
          </div>
          {Overlay}
          <Navbar isMenuActive={isMenuActive}>
            <ul>
              <li>
                <a className="" href="/">
                  about
                </a>
              </li>
              <li>
                <a className="" href="/">
                  skills
                </a>
              </li>
              <li>
                <a className="" href="/">
                  projects
                </a>
              </li>
              <li>
                <a className="" href="/">
                  contact me
                </a>
              </li>
            </ul>
          </Navbar>
        </div>
      </div>
    </header>
  );
};
