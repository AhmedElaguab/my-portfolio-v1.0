import { FaTwitterSquare, FaGithubSquare, FaLinkedin } from 'react-icons/fa';

export const SocialMediaLink = ({ name, linkUrl }) => {
  let icon = null;

  if (name === 'twitter') icon = <FaTwitterSquare />;
  if (name === 'github') icon = <FaGithubSquare />;
  if (name === 'linkedin') icon = <FaLinkedin />;

  return (
    <div>
      <a
        className="flex text-3xl mr-2"
        href={linkUrl}
        target="_blank"
        rel="noreferrer"
      >
        {icon}
      </a>
    </div>
  );
};
