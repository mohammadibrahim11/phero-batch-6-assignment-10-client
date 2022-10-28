import React from "react";
import { useLoaderData } from "react-router-dom";
import Courseitem from "../Courseitem/Courseitem";

const Category = () => {
  const items = useLoaderData();

  console.log(items);
  return (
    <div>
      {items.map((item) => (
        <Courseitem item={item} key={item.id}></Courseitem>
      ))}
    </div>
  );
};

export default Category;
