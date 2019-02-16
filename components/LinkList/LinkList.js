import React from "react";
import VisuallyHidden from "@reach/visually-hidden";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { ListOfLinks, IconLink } from "./LinkListStyles";

const iconPicker = {
  github: <FaGithub />,
  twitter: <FaTwitter />,
  linkedin: <FaLinkedin />
};

export const LinkList = ({ links = [] }) => (
  <ListOfLinks>
    {links.map(link => (
      <IconLink key={link.content} href={link.href}>
        <VisuallyHidden>{link.content}</VisuallyHidden>
        {iconPicker[link.content]}
      </IconLink>
    ))}
  </ListOfLinks>
);

export default LinkList;
