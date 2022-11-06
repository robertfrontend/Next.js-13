import Link from "next/link";

const fetchPostId = (id) => {
  // cache: "no-store";
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: "no-store",
  }).then((res) => res.json());
};

export default async function Post({ children, params }) {
  const { id } = params;

  const data = await fetchPostId(id);
  return (
    <div>
      <h2 style={{ color: "#09f" }}>{data.title}</h2>
      <p>{data.body}</p>
      <Link href={`/posts/${id}/comments`}>Ver comentarios 📑 </Link>
      {children}
    </div>
  );
}
