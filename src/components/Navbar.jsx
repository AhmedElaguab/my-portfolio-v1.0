export const Navbar = ({ isMenuActive, children }) => {
  return (
    <nav
      className={`flex flex-col flex-grow justify-between lg:flex-row bg-white fixed top-16 bottom-0 left-0 w-10/12 max-w-96 lg:max-w-none xs:w-96 ml-0 transition-all ${
        !isMenuActive && '-ml-96'
      } lg:ml-0 lg:static`}
    >
      {children}
    </nav>
  );
};
