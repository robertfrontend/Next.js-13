"use client";

import * as React from "react";

export default function LikeButton({ id }) {
  const [liked, setLiked] = React.useState(false);

  return (
    <>
      <button onClick={() => setLiked(!liked)}>{liked ? "💙" : "💔"}</button>
    </>
  );
}
