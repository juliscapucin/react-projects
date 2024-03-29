import React from "react";

const Photo = ({
  urls: { regular },
  alt_description,
  likes,
  user: {
    name,
    portfolio_url,
    profile_image: { medium },
  },
}) => {
  return (
    <article className='infinite-photo'>
      <img src={regular} alt={alt_description} />
      <div className='infinite-photo-info'>
        <div>
          <h5>{name}</h5>
          <p>{likes} likes</p>
        </div>
        <a href={portfolio_url}>
          <img src={medium} alt={name} className='infinite-user-img' />
        </a>
      </div>
    </article>
  );
};

export default Photo;
