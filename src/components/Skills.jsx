import skills from './../skills.data';

export const Skills = () => {
  return (
    <section className="container">
      <div className="px-6">
        <div className="pt-28">
          <h2 className="text-2xl font-bold">•••Skills</h2>
          <div className="mt-10">
            {skills.map((skillSet) => (
              <div className="flex flex-wrap">
                {skillSet.map((Skill) => (
                  <Skill className="w-10 h-10 mb-10 mr-6" />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
