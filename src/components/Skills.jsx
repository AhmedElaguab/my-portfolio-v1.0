import SKILLS from './../skills.data';

export const Skills = () => {
  return (
    <section className="container">
      <div className="px-6">
        <div className="pt-28 pb-14">
          <h2 className="text-2xl font-bold">•••Skills</h2>
          <div className="mt-10">
            {SKILLS.map(({ id, entities }) => (
              <div className="flex flex-wrap" key={id}>
                {entities.map(({ Skill, id }) => (
                  <Skill key={id} className="w-10 h-10 mb-10 mr-6" />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
