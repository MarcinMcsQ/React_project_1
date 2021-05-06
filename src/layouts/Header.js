import React from "react";
import { Route, Switch } from "react-router-dom";
import "../styles/Header.css";

import header1 from "../images/header11.jpg";
import header2 from "../images/header22.jpg";
import header3 from "../images/header33.jpg";
import header4 from "../images/header44.jpg";
import header5 from "../images/header55.jpg";

const Header = () => {
  return (
    <>
      <Switch>
        <Route
          path="/"
          exact
          render={() => <img src={header2} alt="PanelAdmin img" />}
        />
        <Route
          path="/products"
          render={() => <img src={header1} alt="products img" />}
        />
        <Route
          path="/contact"
          render={() => <img src={header4} alt="contact img" />}
        />
        <Route
          path="/admin"
          render={() => <img src={header3} alt="PanelAdmin img" />}
        />
        <Route render={() => <img src={header5} alt="fany images" />} />
      </Switch>
    </>
  );
};

export default Header;
