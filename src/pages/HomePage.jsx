import { Intro } from '../components/Intro';
import { About } from '../components/About';
import { Skills } from '../components/Skills';
import { Projects } from '../components/Projects';
import { Contact } from '../components/Contact';

export const HomePage = () => {
  return (
    <div>
      <Intro />
      <About />
      <Skills />
      <div className="bg-blue-50">
        <Projects />
      </div>
      <Contact />
    </div>
  );
};
