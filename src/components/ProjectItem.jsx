import { FaLink, FaGithubSquare } from 'react-icons/fa';
import Image from '../assets/bg.png';

export const ProjectItem = ({ project }) => {
  return (
    <div className="lg:w-2/4 lg:px-3">
      <article className="flex flex-col sm:flex-row  sm:h-40 bg-white mb-8 rounded-md shadow-md overflow-hidden">
        <header className="sm:w-4/12 md:w-5/12">
          <img
            className="flex h-44 sm:h-full w-full object-cover"
            src={Image}
            alt={project.name}
          />
        </header>
        <div className="sm:flex sm:flex-col sm:w-8/12 md:w-7/12">
          <main className="p-4 flex-grow">
            <h3 className="text-xl font-semibold flex-grow">{project.name}</h3>
            <p className="mt-2 text-gray-600">{project.desc}</p>
          </main>
          <hr className="border-t border-gray-200 mt-2 sm:mt-0" />
          <footer className="flex items-center p-4 sm:py-2">
            <div className="felx items-center uppercase font-semibold text-xs tracking-widest mr-3">
              <a
                className="flex bg-purple-600 text-white hover:bg-purple-700 py-1 px-2 rounded"
                href={project.preview}
              >
                <FaLink className="mr-2 mt-0.5" />
                <span>Preview</span>
              </a>
            </div>
            <div className="">
              <a className="flex items-center text-2xl" href={project.github}>
                <FaGithubSquare />
              </a>
            </div>
          </footer>
        </div>
      </article>
    </div>
  );
};
