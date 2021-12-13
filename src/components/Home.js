import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHippo } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
  return <div className="heading">
    <h1>Welcome to animals app</h1>
    <FontAwesomeIcon icon={faHippo} />
    </div>;
};

export default Home;
