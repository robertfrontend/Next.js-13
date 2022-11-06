"use client";
import * as React from "react";

export default function Error({ error, reset }) {
  React.useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div style={{ background: "#eb2525", padding: "1em" }}>
      {" "}
      <p>❌Ha ocurrido un error al traer los comentarios❌</p>
      <button onClick={() => reset()}>Reset error boundary</button>
    </div>
  );
}
