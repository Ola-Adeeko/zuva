import React from "react";
import { useNavigate } from "react-router-dom";

import "./menu-item.style.scss";

const MenuItem = ({ title, imageUrl, size }) => {
  const navigate = useNavigate();
  return (
    <div className={`${size} menu-item`}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="content" onClick={() => navigate(`/shop/${title}`)}>
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
