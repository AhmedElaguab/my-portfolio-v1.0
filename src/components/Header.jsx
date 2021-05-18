import { useState } from 'react';

import { HiMenu, HiX } from 'react-icons/hi';
import { Overlay as OverlayComponent } from './Overlay';

export const Header = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const handleMenuToggle = () => setIsMenuActive((prevState) => !prevState);

  const MenuIcon = isMenuActive ? HiX : HiMenu;
  let Overlay = isMenuActive && <OverlayComponent />;

  return (
    <header className="bg-white">
      <div className="container mx-auto">
        <div className="h-16 py-3 px-4 flex items-center border-b border-gray-200">
          <div>
            <MenuIcon className="text-3xl mr-3" onClick={handleMenuToggle} />
          </div>
          {Overlay}
          <div>
            <a className="text-2xl font-medium" href="/">
              <span>a|e </span>
              <span>ahmed elaguab</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
