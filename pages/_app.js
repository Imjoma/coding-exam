import { useState } from "react";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const now = new Date().getFullYear();

  const router = useRouter();

  const [articles, setArticles] = useState([
    {
      id: 1,
      name: "article 1",
      content: "this is the content",
      date: now,
    },
    {
      id: 2,
      name: "article 2",
      content: "this is the content",
      date: now,
    },
    {
      id: 3,
      name: "article 3",
      content: "this is the content",
      date: now,
    },
  ]);

  const handleSave = (e, title, content) => {
    e.preventDefault();
    console.log("saved");
    const newArticle = {
      id: articles.length + 1,
      name: title,
      content: content,
      date: now,
    };
    setArticles([newArticle, ...articles]);

    router.replace("/");
  };
  const handleDelete = (id) => {
    const newArticle = articles.filter((article) => article.id !== id);
    setArticles(newArticle);
  };
  return (
    <Component
      {...pageProps}
      articles={articles}
      handleDelete={handleDelete}
      handleSave={handleSave}
    />
  );
}

export default MyApp;
