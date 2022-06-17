import { useRouter } from "next/router";
import Article from "../components/article";
import Link from "next/link";

export default function Home({ articles }) {
  const router = useRouter();
  const handleShowArticle = (id) => {
    router.push("/article/" + id);
  };

  return (
    <div>
      <Link href="/create">Create Article</Link>

      <div>
        {articles.map((article) => (
          <div key={article.id} style={{ border: "2px solid black" }}>
            <div onClick={() => handleShowArticle(article.id)}>
              {article.name}
            </div>
            <p>{article.content}</p>
            <p>{article.date}</p>
            <button>Edit</button>
            <button onClick={() => handleDelete(article.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}
