import React, { useState, useEffect } from "react";
import Image from "./Image";

import images from "./images";

const clientID = `?client_id=${process.env.REACT_APP_HOR_SNAP_ACCESS_KEY}`;
const mainUrl = `https://api.unsplash.com/users/`;

export default function Gallery({ name }) {
  const [loading, setLoading] = useState(true);
  const [allImages, setAllImages] = useState(images);
  const [user, setUser] = useState([]);

  const fetchData = async () => {
    setLoading(true);
    let imagesUrl = `${mainUrl}${name}/photos${clientID}`;
    let userUrl = `${mainUrl}${name}${clientID}`;

    try {
      // const responseImages = await fetch(imagesUrl);
      const responseUser = await fetch(userUrl);
      // const dataImages = await responseImages.json();
      const dataUser = await responseUser.json();
      // setImages(dataImages);
      setUser(dataUser);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='photo-gallery-gallery'>
      <a
        className='photo-gallery-btn'
        href={`${!loading && user.links.html}`}
        target='_blank'
      >
        <div className='photo-gallery-user-name'>
          <h1>{user.name}</h1>
        </div>
      </a>
      <div className='photo-gallery-media-scroller photo-gallery-inline'>
        {images.map((item, index) => {
          return <Image index={index + 1} key={index} {...item} {...user} />;
        })}
      </div>
    </div>
  );
}
