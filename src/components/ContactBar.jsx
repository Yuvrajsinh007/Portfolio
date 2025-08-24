import React from "react";
import { Github, Linkedin, Mail, FileText } from "lucide-react";

// LeetCode SVG
const LeetCodeIcon = () => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width="27"
    height="27"
    fill="black"
  >
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
  </svg>
);

// Twitter SVG
const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="size-5 relative z-10"><path fill="currentColor" d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"></path>
  </svg>
);

const contacts = [
  { name: "GitHub", icon: <Github />, link: "https://github.com/Yuvrajsinh007", newTab: true },
  { name: "LeetCode", icon: <LeetCodeIcon />, link: "https://leetcode.com/u/jadeja007/", newTab: true },
  { name: "LinkedIn", icon: <Linkedin />, link: "https://www.linkedin.com/in/jadeja007/", newTab: true },
  { name: "Email", icon: <Mail />, link: "mailto:mr.yuvrajsinhjadeja007@gmail.com" },
  { name: "Twitter", icon: <TwitterIcon />, link: "https://x.com/YUVRAJSINH26191", newTab: true },
  { name: "Resume", icon: <FileText />, link: "/YUVRAJSINH_JADEJA_RESUME.pdf", download: true },
];

const ContactBar = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="group flex flex-col items-center gap-4 bg-white/90 backdrop-blur-md px-4 py-6 rounded-2xl shadow-xl transition-all duration-500 ease-in-out hover:gap-5 border border-gray-200">
        {contacts.map(({ name, icon, link, newTab, download }, index) => (
          <React.Fragment key={index}>
            <a
              href={link}
              {...(newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              {...(download ? { download: true } : {})}
              className="relative group/icon flex flex-col items-center text-black hover:text-indigo-600 transition"
            >
              {/* Tooltip */}
              <span className="absolute -top-6 text-xs px-2 py-1 bg-black text-white rounded opacity-0 translate-y-2 group-hover/icon:opacity-100 group-hover/icon:translate-y-0 transition-all duration-300">
                {name}
              </span>

              {/* Animated icon wrapper */}
              <div className="transition-all duration-500 ease-in-out bg-transparent rounded-full p-1 group-hover/icon:py-1 bg-white hover:bg-gray-200 flex items-center justify-center">
                <div className="transition-transform duration-300 ease-in-out scale-100 group-hover/icon:scale-90">
                  {icon}
                </div>
              </div>
            </a>

            {/* Divider after 5th item */}
            {index === 4 && (
              <div className="w-6 h-[1px] bg-gray-300 my-1" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ContactBar;
