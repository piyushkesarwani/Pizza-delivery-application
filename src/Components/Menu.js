import React from "react";
import { menuArray } from "../Data";
import { MenuItem } from "./MenuItem";
import { Cart } from "./Cart";

export const Menu = ({ menu }) => {
  return (
    <main className="menuCartContainer">

      <section className="menuContainer">
        {menu.map((item) => {
          return <MenuItem key={item.id} item={item} />;
        })}
      </section>

      <section className="cartContainer">
            <Cart />
      </section>
    </main>
  );
};
