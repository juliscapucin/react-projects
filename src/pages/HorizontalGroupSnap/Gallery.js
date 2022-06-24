import React, { useState, useEffect } from "react";
import Image from "./Image";

const clientID = `?client_id=${process.env.REACT_APP_HOR_SNAP_ACCESS_KEY}`;
const mainUrl = `https://api.unsplash.com/users/`;

export default function Gallery({ name }) {
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState([]);
  const [user, setUser] = useState([]);

  const fetchData = async () => {
    setLoading(true);
    let imagesUrl = `${mainUrl}${name}/photos${clientID}`;
    let userUrl = `${mainUrl}${name}${clientID}`;

    try {
      const responseImages = await fetch(imagesUrl);
      const responseUser = await fetch(userUrl);
      const dataImages = await responseImages.json();
      const dataUser = await responseUser.json();
      setImages(dataImages);
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
    <div className='hor-group-snap-gallery'>
      <a
        className='hor-group-snap-btn'
        href={`${!loading && user.links.html}`}
        // href={`https://www.instagram.com/${
        //   !loading && user.social.instagram_username
        // }`}
        target='_blank'
      >
        <div className='hor-group-snap-user-name'>
          <h1>{user.name}</h1>
        </div>
      </a>
      {/* <div className='hor-group-snap-user-bio'>
        <h4>{user.bio}</h4>
      </div> */}
      <div className='hor-group-snap-media-scroller hor-group-snap-inline'>
        {images.map((item, index) => {
          return (
            <Image
              index={index + 1}
              key={item.id}
              {...item}
              {...user}
              instagram={user.social.instagram_username}
            />
          );
        })}
      </div>
    </div>
  );
}
