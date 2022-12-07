import React, { useState } from "react";
import "./App.css";
import { Menu } from "./Components/Menu";
import { Category } from "./Components/Category";
import { Navbar } from "./Components/Navbar";
// import { Cart } from "./Components/Cart";
import { menuArray } from "./Data";

const allCategories = [
  "All",
  ...new Set(menuArray.map((item) => item.category)),
];
console.log(allCategories);

function App() {
  const [menu, setMenu] = useState(menuArray);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "All") {
      setMenu(menuArray);
      return;
    }
    const newItems = menuArray.filter((item) => item.category === category);
    setMenu(newItems);
  };

  return (
      <div className="App">
        <Navbar />
          <div className="MenuCart">
            <div className="headerTitle">
              <h1 className="title">Our Menu</h1>
              <span className="underline"></span>
            </div>
            <Category categories={categories} filterItems={filterItems} />
            <div className="gridContainer">
              <Menu menu={menu} />
            </div>
          </div>
      </div>
    // <div className="App">
    //   <Navbar />
    //   <div className="MenuCart">
    //     <div className="headerTitle">
    //       <h1 className="title">Our Menu</h1>
    //       <span className="underline"></span>
    //     </div>
    //     <Category categories={categories} filterItems={filterItems} />
    //     <div className="gridContainer">
    //       <Menu menu={menu} />
    //     </div>
    //   </div>
    // </div>
  );
}

export default App;
