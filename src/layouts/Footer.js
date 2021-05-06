import React from "react";
import { Route, Switch } from "react-router";

import "../styles/Footer.css";

const Footer = () => {
  return (
    <div>
      <h2>Stopka</h2>
      <Switch>
        <Route
          path="/:page/:idProduct"
          render={(props) => {
            console.log(props);
            return (
              <p>
                Jestes na{" "}
                <span>
                  {props.match.params.page}/{props.match.params.idProduct}
                </span>
                {/* Jestes na <span>{props.match.params.page}</span>
                Jestes na <span>{props.match.url}</span>
                Jestes na <span>{props.match.path}</span> */}
              </p>
            );
          }}
        />
        <Route
          path="/:page"
          render={(props) => {
            console.log(props);
            return (
              <p>
                {/* Jestes na <span>{props.match.params.idProduct}</span> */}
                Jestes na <span>{props.match.params.page}</span>
                {/* Jestes na <span>{props.match.url}</span>
                Jestes na <span>{props.match.path}</span> */}
              </p>
            );
          }}
        />
        <Route
          path="/"
          exact
          render={(props) => {
            console.log(props);
            return (
              <p>
                Jestes na <span>stronie glownej</span>
              </p>
            );
          }}
        />
      </Switch>
    </div>
  );
};

export default Footer;
