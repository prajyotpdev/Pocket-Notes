import { useNavigate } from "react-router-dom";
import { createContext, useState, useEffect } from "react";

export const CategorySelectedContext = createContext({
  selectedCategory: "",
  setselectedCategory: (category) => {},
  clearOut: () => {},
  selectedCategoryId: "",
});

export const CategorySelectedProvider = ({ children }) => {
  const [selectedCategory, setselectedCategory] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = setselectedCategory(selectedCategory);
    return unsubscribe;
  }, [setselectedCategory]);

  const clearOut = () => {
    setselectedCategory(null);
    navigate("/");
  };

  const value = {
    selectedCategory,
    setselectedCategory,
    clearOut,
  };

  return (
    <CategorySelectedContext.Provider value={value}>
      {children}
    </CategorySelectedContext.Provider>
  );
};
