export const Navbar = ({ isMenuActive, children }) => {
  return (
    <nav
      className={`bg-white fixed top-16 bottom-0 left-0 w-10/12 max-w-96 xs:w-96 ml-0 transition-all ${
        !isMenuActive && '-ml-96'
      } lg:ml-0 lg:static`}
    >
      {children}
    </nav>
  );
};
