export const NavbarButton = ({ linkUrl, label }) => {
  return (
    <div className="p-4 lg:p-2">
      <a
        className="flex justify-center p-4 lg:p-2 lg:px-8 mb-2 lg:mb-0 lg:mr-2 text-xl rounded text-white bg-purple-600 hover:bg-purple-700"
        href={linkUrl}
      >
        {label}
      </a>
    </div>
  );
};
