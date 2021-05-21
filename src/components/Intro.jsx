import { ReactComponent as IntroImage } from '../assets/intro.svg';

export const Intro = () => {
  return (
    <section className="container">
      <div className="px-6">
        <div className="flex flex-col md:flex-row md:justify-between py-28 lg:px-16">
          <h1 className="flex flex-col justify-center text-3xl xl:text-4xl xl:leading-relaxed font-medium leading-relaxed">
            Welcome to my portfolio. <br className="hidden sm:block" />
            My name is Ahmed Elaguab, <br className="hidden sm:block" />
            and I'm a Frontend Developer.
          </h1>
          <div className="hidden md:flex justify-end md:flex-col md:justify-center mt-14 md:mt-0">
            <IntroImage className="w-48 h-48 xl:w-72 " />
          </div>
        </div>
      </div>
    </section>
  );
};
