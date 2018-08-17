import React from "react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { ListOfLinks, IconLink } from "./LinkListStyles";

function iconPicker(content) {
  switch (content) {
    case "github": {
      return <FaGithub />;
    }
    case "twitter": {
      return <FaTwitter />;
    }
    case "linkedin": {
      return <FaLinkedin />;
    }
    default: {
      return "";
    }
  }
}

export const LinkList = ({ links }) => (
  <ListOfLinks>
    {links &&
      links.map(link => (
        <IconLink key={link.href} href={link.href}>
          {iconPicker(link.content)}
        </IconLink>
      ))}
  </ListOfLinks>
);

export default LinkList;
