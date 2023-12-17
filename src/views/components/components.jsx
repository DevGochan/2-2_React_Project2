import React from "react";
import PropTypes from "prop-types";

import Header from "../../components/header/header.jsx";
import Footer from "../../components/footer/footer.jsx";

import Cards from "./sections/cards.jsx";
import MainHeaderBanner from "../../components/banner/banner.jsx";
import SideButton from "../../MoveToTop.js";

const Components = () => {
  return (
    <div id="main-wrapper">
      <Header />
      <div className="page-wrapper">
        <div className="container-fluid">
          <MainHeaderBanner />
          <Cards />
        </div>
      </div>
      <Footer />
      <SideButton />
    </div>
  );
};

Components.propTypes = {
  classes: PropTypes.object,
};

export default Components;
