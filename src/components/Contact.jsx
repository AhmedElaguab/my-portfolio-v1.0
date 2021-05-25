export const Contact = () => {
  return (
    <section className="container">
      <div className="px-6">
        <div className="py-28">
          <h2 className="text-2xl font-bold">•••Contact</h2>
          <p className="mt-6 text-xl text-gray-700 md:w-9/12 xl:w-8/12">
            Please reach out over email{' '}
            <a href="mailto:elaguabahmed97@gmail.com">
              <span className="bg-purple-300 px-2 font-medium">
                elaguabahmed97@gmail.com
              </span>
            </a>{' '}
            or tweet{' '}
            <a
              href="https://www.twitter.com/AhmedElaguab"
              taget="_blank"
              rel="noreferrer"
            >
              <span className="bg-purple-300 px-2 font-medium">
                @AhmedElaguab
              </span>
            </a>{' '}
            if you're interested in knowing more about me or just have a good
            joke.
          </p>
        </div>
      </div>
    </section>
  );
};
