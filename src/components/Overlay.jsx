export const Overlay = ({ onClick }) => {
  return (
    <div
      className="fixed top-16 bottom-0 left-0 right-0 bg-black opacity-40 transition-opacity lg:hidden"
      onClick={onClick}
    />
  );
};
