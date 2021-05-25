import { SocialMediaLink } from './SocialMediaLink';

export const SocialMediaLinks = () => {
  return (
    <div className="mt-6 text-xl text-gray-700 md:w-9/12 xl:w-8/12">
      <div className="flex">
        <p className="mr-4">Find me on:</p>
        <div className="flex">
          <SocialMediaLink
            name="linkedin"
            linkUrl="https://www.linkedin.com/in/AhmedElaguab"
          />
          <SocialMediaLink
            name="github"
            linkUrl="https://www.github.com/AhmedElaguab"
          />
          <SocialMediaLink
            name="twitter"
            linkUrl="https://www.twitter.com/AhmedElaguab"
          />
        </div>
      </div>
    </div>
  );
};
