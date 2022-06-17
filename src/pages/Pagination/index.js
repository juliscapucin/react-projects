import React, { useState, useEffect } from "react";
import { useFetch } from "./useFetch";

import "./style.scss";

import Follower from "./Follower";

function App() {
  const { loading, data } = useFetch();
  const [page, setPage] = useState(0);
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    if (loading) return;
    setFollowers(data[page]);
  }, [loading, page]);

  const handlePage = (index) => {
    setPage(index);
  };

  const nextPage = (page) => {
    if (page + 1 === data.length) {
      setPage(0);
    } else {
      setPage(page + 1);
    }
  };

  const prevPage = (page) => {
    if (page === 0) {
      setPage(data.length - 1);
    } else {
      setPage(page - 1);
    }
  };

  return (
    <main className='pagination-section'>
      <div className='pagination-section-title'>
        <h1>{loading ? "loading..." : "Pagination"}</h1>
      </div>
      <section className='pagination-followers-container'>
        <div className='pagination-container'>
          {followers.map((follower) => {
            return <Follower key={follower.id} {...follower} />;
          })}
        </div>
        {!loading && (
          <div className='pagination-btn-container'>
            <button
              className='pagination-prev-btn'
              onClick={() => prevPage(page)}
            >
              {`<`}
            </button>
            {data.map((item, index) => {
              return (
                <button
                  key={index}
                  className={`pagination-page-btn ${
                    index === page && "pagination-active-btn"
                  }`}
                  onClick={() => handlePage(index)}
                >
                  {index + 1}
                </button>
              );
            })}
            <button
              className='pagination-prev-btn'
              onClick={() => nextPage(page)}
            >
              {`>`}
            </button>
          </div>
        )}
      </section>
    </main>
  );
}

export default App;
