import React from "react";

const ProjectCard = ({ title, date, desc, image, link, type }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden w-[70%] m-auto h-[420px] flex flex-col">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6 flex flex-col justify-between flex-1">
        <div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-sm text-gray-500 mb-2">{date}</p>
          <p className="text-gray-700 text-sm line-clamp-3">{desc}</p>
        </div>
        <a
          href={link}
          target="_blank"
          className="inline-block mt-4 bg-black text-white px-4 py-2 rounded-md text-sm self-start">
          {type}
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;