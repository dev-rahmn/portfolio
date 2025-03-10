import React from "react";

const SingleContatSocial = ({ Icon, link }) => {
  // Ensure the URL includes the proper protocol
  const url = link.startsWith("http") ? link : `https://${link}`;

  return (
    <div className="text-2xl h-12 w-12 rounded-full border-2 border-orange text-orange p-2 flex items-center justify-center hover:bg-orange hover:text-black transition-all duration-300">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer"
      >
        <Icon />
      </a>
    </div>
  );
};

export default SingleContatSocial;
