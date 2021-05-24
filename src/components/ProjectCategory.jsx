import { ProjectItem } from './ProjectItem';

export const ProjectCategory = ({ category, projects }) => {
  return (
    <div>
      <h3 className="ml-3 mt-8 text-xl uppercase text-purple-500 font-semibold">
        {category}
      </h3>
      <div className="mt-6 lg:flex flex-wrap">
        {projects.map((project) => (
          <ProjectItem project={project} />
        ))}
      </div>
    </div>
  );
};
