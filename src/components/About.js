import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHippo, faOtter, faDog, faDove } from '@fortawesome/free-solid-svg-icons'

const About = () => {
  return <div className="heading">
    <h1>This app provides information on different animals.</h1>
    <FontAwesomeIcon icon={faHippo} />
    <FontAwesomeIcon icon={faDog} />
    <FontAwesomeIcon icon={faDove} />
    <FontAwesomeIcon icon={faOtter} />

  </div>;
};

export default About;
