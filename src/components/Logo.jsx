import { Link } from 'react-router-dom';
export const Logo = ({ isMenuActive, handleMenuToggle }) => {
  const closeMenuWhenOpen = () => {
    if (isMenuActive) handleMenuToggle();
  };

  return (
    <div>
      <Link
        className="text-2xl font-medium lg:mr-10"
        to="/"
        onClick={closeMenuWhenOpen}
      >
        <span>a|e </span>
        <span>ahmed elaguab</span>
      </Link>
    </div>
  );
};
