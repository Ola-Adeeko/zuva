import React, { useEffect } from "react";
import "./collection.scss";
import CollectionItem from "../../components/collection-item/collection-item.component";
import { useParams } from "react-router-dom";
import SHOP_DATA from "../shop/shop.data";

const Collection = ({ title, items }) => {
  const { collection } = useParams();

  useEffect(() => {
    document.title = `Zuva | ${collection}`;
  }, [collection]);

  const data = SHOP_DATA.filter((item) => item.title === collection);
  console.log(data);
  console.log(collection);
  return (
    <div className="collection">
      <h1 className="title">{data[0].title.toUpperCase()}</h1>

      <div className="preview">
        {data[0].items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Collection;
