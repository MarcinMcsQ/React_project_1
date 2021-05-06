import React from "react";
import Article from "../component/Article";

const articles = [
  {
    id: 1,
    title: "Współczesna emchanika ",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, omnis quisquam quam pariatur sit voluptatum ut nulla minus quae porro natus, recusandae error sequi vel quis doloribus similique amet dolorem!",
  },
  {
    id: 2,
    title: "Pojazdy elektryczne ",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, omnis quisquam quam pariatur sit voluptatum ut nulla minus quae porro natus, recusandae error sequi vel quis doloribus similique amet dolorem!",
  },
  {
    id: 3,
    title: "Pojazdy spalinowe ",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, omnis quisquam quam pariatur sit voluptatum ut nulla minus quae porro natus, recusandae error sequi vel quis doloribus similique amet dolorem!",
  },
];

const HomePage = () => {
  const artList = articles.map((article) => (
    <Article key={article.id} {...article} />
  ));
  return <div className="home">{artList}</div>;
};

export default HomePage;
