import React from "react";

const Follower = ({ avatar_url, html_url, login }) => {
  return (
    <article className='pagination-card'>
      <div className='pagination-img-container'>
        <img src={avatar_url} alt={login} />
      </div>
      <h5>{login}</h5>
      <a href={html_url} className='pagination-btn'>
        View Profile
      </a>
    </article>
  );
};

export default Follower;
