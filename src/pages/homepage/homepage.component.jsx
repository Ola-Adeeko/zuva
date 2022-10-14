import React, { useEffect } from "react";

import "./homepage.style.scss";

import Directory from "../../components/directory/directory.component";

const HomePage = () => {
  useEffect(() => {
    document.title = "Zuva | Home";
  }, []);
  return (
    <div className="homepage">
      <Directory />
    </div>
  );
};

export default HomePage;
