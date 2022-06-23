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
    <>
      <h3>{user.name}</h3>
      <div className='hor-snap-media-scroller hor-snap-inline'>
        {images.map((item, index) => {
          return <Image key={index} {...item} />;
        })}
      </div>
    </>
  );
}
