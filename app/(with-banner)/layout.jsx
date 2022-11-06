
export default function PostsLayout({ children }) {
  return (
    <div>
      <div style={{ background: "white", color: "black" }}>
        {" "}
        <marquee>Demasiado lindo next.js 13</marquee>
      </div>
      {children}
    </div>
  );
}
