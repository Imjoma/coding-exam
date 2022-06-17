import React from "react";
import { useRouter } from "next/router";
const ArticleDetails = ({ articles }) => {
  const router = useRouter();
  const id = router.query.articleId;

  const details = articles.filter((article) => article.id === id);
  console.log(details);
  console.log(articles);
  return (
    <div>
      <h1>{id}</h1>
      {/* <p>{articles.date}</p>
      <h3>{articles.content}</h3> */}
    </div>
  );
};

export default ArticleDetails;
