import React from "react";
import { list } from "../layouts/Navigation";

const LoginPage = () => {
  //w zielonym kod do poprawki

  // const updatelist = () => {
  //   console.log(list);
  //   const listIdenx = list.findIndex((item) => item.id === 3);

  //   list[listIdenx].class = "";
  //   console.log(list[listIdenx]);
  // };
  return (
    // <div render={updatelist()}>
    <div>
      <label htmlFor="">
        Podaj login
        <input type="text" />
      </label>
      <br />
      <label htmlFor="">
        Podaj haslo
        <input type="password" />
      </label>
      <button>Zaloguj</button>
    </div>
  );
};

export default LoginPage;
