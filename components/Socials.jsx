import Link from "next/link";

import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiGithubLine,
  RiLinkedinBoxFill,
} from "react-icons/ri";

export const socialData = [
  {
    name: "Github",
    link: "https://github.com/08-ayush",
    Icon: RiGithubLine,
  },
  {
    name: "Github",
    link: "https://www.linkedin.com/in/aayush-chauhan-9b3b76207/",
    Icon: RiLinkedinBoxFill,
  },
  {
    name: "YouTube",
    link: "https://youtube.com",
    Icon: RiYoutubeLine,
  },
  {
    name: "Instagram",
    link: "https://instagram.com",
    Icon: RiInstagramLine,
  },
  {
    name: "Facebook",
    link: "https://facebook.com",
    Icon: RiFacebookLine,
  },
  
  
];

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      {socialData.map((social, i) => (
        <Link
          key={i}
          title={social.name}
          href={social.link}
          target="_blank"
          rel="noreferrer noopener"
          className={`${
            social.name === "Github"
              ? "bg-accent rounded-full p-[5px] hover:text-white"
              : "hover:text-accent"
          } transition-all duration-300`}
        >
          <social.Icon aria-hidden />
          <span className="sr-only">{social.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
