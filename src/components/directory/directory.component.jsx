import React from "react";
import DirectoryItem from "../directory-item/directory-item.component";
import "./directory.styles.scss";

const Directory = ({ categories }) => {
  return (
    <React.StrictMode>
      <div className='directory-container'>
        {categories.map((category) => (
          <DirectoryItem key={category.id} category={category} />
        ))}
      </div>
    </React.StrictMode>
  );
};

export default Directory;
