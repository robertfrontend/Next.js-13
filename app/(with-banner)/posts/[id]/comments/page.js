const fetchComments = async (id) => {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  throw new Error("Error al cargar los comentarios");

//   return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
//     cache: "no-store",
//   }).then((res) => res.json());
};

export default async function Post({ params }) {
  const { id } = params;

  const comments = await fetchComments(id);
  return (
    <div>
      <h3>Comentarios📑</h3>
      <ul style={{ background: "#8f8f8f7f", padding: "1em" }}>
        {comments.map((comment) => (
          <li key={comment.id}>
            <h2 style={{ color: "#09f" }}>{comment.title}</h2>
            <p>{comment.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
