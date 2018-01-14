import React from 'react';
import { Box, Title } from './TitleBoxStyles';

export const TitleBox = ({ className, title, children }) => (
  <Box>
    <Title>{title}</Title>
    {children}
  </Box>
);

export default TitleBox;
