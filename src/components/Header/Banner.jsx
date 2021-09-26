import React from 'react';
import PropTypes from 'prop-types';
import Logo from "./Logo";
import Socials from "./Socials";

const Banner = props => {
  return (
    <>
      <Logo/>
      <Socials />
    </>
  );
};

Banner.propTypes = {};

export default Banner;
