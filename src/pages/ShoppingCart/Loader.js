import React from "react";
import { useGlobalContext } from "./context";

export default function Loader() {
  const { loading } = useGlobalContext();
  return (
    <>
      {loading ? (
        <div className='loading'>
          <h1>Loading...</h1>
        </div>
      ) : null}
    </>
  );
}
