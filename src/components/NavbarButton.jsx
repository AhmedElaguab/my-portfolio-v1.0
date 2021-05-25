import Resume from './../assets/resume.pdf';

export const NavbarButton = ({ linkUrl, label }) => {
  return (
    <div className="p-4 lg:p-2">
      <a
        className="flex justify-center p-3 lg:py-2 lg:px-8 text-xl rounded text-white bg-purple-600 hover:bg-purple-700"
        href={Resume}
      >
        {label}
      </a>
    </div>
  );
};
