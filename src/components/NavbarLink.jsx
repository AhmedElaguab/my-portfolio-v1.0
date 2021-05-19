export const NavbarLink = ({ label, linkUrl, onClick }) => {
  return (
    <li>
      <a
        className="flex py-2 px-3 mb-2 lg:mb-0 lg:mr-2 text-xl rounded text-gray-700 hover:text-gray-800 hover:bg-purple-50"
        href={linkUrl}
        onClick={onClick}
      >
        {label}
      </a>
    </li>
  );
};
