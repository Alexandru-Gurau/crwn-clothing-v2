import { createContext, useState, useEffect } from "react";

// import { addCollectionAndDocuments } from "../utils/firebase/firebase.utils.js";
import { getCategoriesAndDocument } from "../utils/firebase/firebase.utils.js";

// import SHOP_DATA from "../shop-data.js";

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesMap = await getCategoriesAndDocument();

      setCategoriesMap(categoriesMap);
    };
    getCategoriesMap();
  }, []);

  // This useEffect must be used only when we want to set new items to collection, after that we have to disable it.
  // useEffect(() => {
  //   addCollectionAndDocuments("categories", SHOP_DATA);
  // }, []);

  const value = { categoriesMap };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};

// ! ALL DISABLED ELEMENTS ARE USED ONLY WHEN WE WANT TO ADD ITEMS TO COLLECTION
