export const Navbar = ({ isMenuActive }) => {
  return (
    <nav
      className={`bg-white fixed top-16 bottom-0 left-0 w-11/12 xs:w-96 p-4 ml-0 transition-all ${
        !isMenuActive && '-ml-96'
      }`}
    >
      this is navbar
    </nav>
  );
};
