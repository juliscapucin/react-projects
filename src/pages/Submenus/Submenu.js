import React, { useState, useRef, useEffect } from "react";

import { useGlobalContext } from "./context";

const Submenu = () => {
  const {
    isSubmenuOpen,
    submenuLocation,
    page: { page, links },
  } = useGlobalContext();

  const submenuContainer = useRef(null);
  const [columns, setColumns] = useState("col-2");

  // position submenu according to button location
  useEffect(() => {
    const submenu = submenuContainer.current;
    const { center, bottom } = submenuLocation;

    setColumns("col-2");

    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;

    if (links.length === 3) {
      setColumns("col-3");
    }
    if (links.length > 3) {
      setColumns("col-4");
    }
  }, [submenuLocation, links]);

  return (
    <aside
      className={`${isSubmenuOpen ? "submenu show" : "submenu"}`}
      ref={submenuContainer}
    >
      <h4>{page}</h4>
      <div className={`submenu-center ${columns}`}>
        {links.map((link, index) => {
          const { label, icon, url } = link;
          return (
            <a key={index} href={url}>
              {icon}
              {label}
            </a>
          );
        })}
      </div>
    </aside>
  );
};

export default Submenu;
