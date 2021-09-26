import React from 'react';
import PropTypes from 'prop-types';
import Banner from "./Banner";
import Nav from "./Nav";

const Header = props => {
  return (
    <>
      <Banner/>
      <Nav/>
    </>
  );
};

Header.propTypes = {};

export default Header;
