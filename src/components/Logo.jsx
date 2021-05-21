import { Link } from 'react-router-dom';
export const Logo = () => {
  return (
    <div>
      <Link className="text-2xl font-medium lg:mr-10" to="/">
        <span>a|e </span>
        <span>ahmed elaguab</span>
      </Link>
    </div>
  );
};
