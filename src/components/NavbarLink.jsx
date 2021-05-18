export const NavbarLink = ({ label, linkUrl, onClick }) => {
  return (
    <li>
      <a
        className="flex p-4 lg:p-2 text-xl text-gray-700 hover:text-gray-800 hover:bg-purple-50"
        href={linkUrl}
        onClick={onClick}
      >
        {label}
      </a>
    </li>
  );
};
