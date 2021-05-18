import { useState } from 'react';

import { HiMenu, HiX } from 'react-icons/hi';
import { Overlay as OverlayComponent } from './Overlay';
import { Navbar } from './Navbar';
import { NavbarLink } from './NavbarLink';

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
              <NavbarLink
                label="about"
                linkUrl="/about"
                onClick={handleMenuToggle}
              />
              <NavbarLink
                label="skills"
                linkUrl="/skills"
                onClick={handleMenuToggle}
              />
              <NavbarLink
                label="projects"
                linkUrl="/projects"
                onClick={handleMenuToggle}
              />
              <NavbarLink
                label="contact"
                linkUrl="/contact"
                onClick={handleMenuToggle}
              />
            </ul>
          </Navbar>
        </div>
      </div>
    </header>
  );
};
