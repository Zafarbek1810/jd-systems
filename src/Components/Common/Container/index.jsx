import React from 'react';
import PropTypes from "prop-types";
import { ContainerWrapper } from './Container.style';

const Container = ({ children, width, ...props }) => {
  return (
    <ContainerWrapper width={width} {...props}>
      {children}
    </ContainerWrapper>
  );
};

Container.proptypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  width: PropTypes.number,
};

export default Container;