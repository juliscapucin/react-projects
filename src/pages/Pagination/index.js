import React, { useState, useEffect } from "react";
import { useFetch } from "./useFetch";

import "./pagination-styles.scss";

import Follower from "./Follower";

function App() {
  const { loading, data } = useFetch();
  const [page, setPage] = useState(0);
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    if (loading) return;
    setFollowers(data[page]);
  }, [loading]);

  return (
    <main>
      <div className='section-title'>
        <h1>{loading ? "loading..." : "Pagination"}</h1>
      </div>
      <section className='followers-container'>
        <div className='container'>
          {data.map((follower) => {
            return <Follower key={follower.id} {...follower} />;
          })}
        </div>
      </section>
    </main>
  );
}

export default App;
