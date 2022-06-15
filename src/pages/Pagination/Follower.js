import React from "react";

const Follower = ({ avatar_url, html_url, login }) => {
  return (
    <article className='pagination-card'>
      <div className='pagination-img-container'>
        <img src={avatar_url} alt={login} />
      </div>
      <h4>{login}</h4>
      <a href={html_url} className='pagination-btn'>
        View Profile
      </a>
    </article>
  );
};

export default Follower;
