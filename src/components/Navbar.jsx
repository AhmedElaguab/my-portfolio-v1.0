export const Navbar = ({ isMenuActive }) => {
  return (
    <nav
      className={`bg-white fixed top-16 bottom-0 left-0 w-10/12 max-w-96 xs:w-96 p-4 ml-0 transition-all ${
        !isMenuActive && '-ml-96'
      }`}
    >
      this is navbar
    </nav>
  );
};
