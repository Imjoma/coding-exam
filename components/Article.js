import React from "react";

const Article = ({ articles }) => {
  return (
    <>
      <h3>{articles.name}</h3>
      <p>{articles.content}</p>
      <p>{articles.date}</p>
    </>
  );
};

export default Article;
