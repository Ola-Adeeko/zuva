import React from "react";
import { useNavigate } from "react-router-dom";

import CollectionItem from "../collection-item/collection-item.component";

import "./collection-preview.style.scss";

const CollectionPreview = ({ title, items }) => {
  const navigate = useNavigate();
  return (
    <div className="collection-preview">
      <div className="preview-head">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span onClick={() => navigate(`/shop/${title}`)}>See All</span>
      </div>

      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
