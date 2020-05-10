import React from 'react';
import TopNav from '../TopNav';
import Footer from '../Footer/Footer';
import PropTypes from 'prop-types';

const MainTemplate = ({ children }) => {
  return (
    <>
      <TopNav />
      {children}
      <Footer />
    </>
  );
};

MainTemplate.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.object,
    PropTypes.node,
  ]).isRequired,
};

export default MainTemplate;
