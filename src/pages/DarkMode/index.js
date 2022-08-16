import React, { useState, useEffect } from "react";

function Index() {
  const [theme, setTheme] = useState("dark-theme");

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
    } else {
      setTheme("light-theme");
    }
  };

  return (
    <div className='dark-mode-main-container'>
      <nav>
        <div className='dark-mode-nav-center'>
          <h1 className='dark-mode-logo'>D&L</h1>
          <button className='dark-mode-btn' onClick={toggleTheme}>
            {theme === "dark-theme" ? "Light theme" : "Dark theme"}
          </button>
        </div>
      </nav>
      <section className='dark-mode-article'>
        <h2>After Dark</h2>
        <h4>Haruki Murakami</h4>
        <p>
          Nineteen-year-old Mari is waiting out the night in an anonymous
          Denny’s when she meets a young man who insists he knows her older
          sister, thus setting her on an odyssey through the sleeping city. In
          the space of a single night, the lives of a diverse cast of Tokyo
          residents—models, prostitutes, mobsters, and musicians—collide in a
          world suspended between fantasy and reality. Utterly enchanting and
          infused with surrealism, After Dark is a thrilling account of the
          magical hours separating midnight from dawn.
        </p>
        <a
          href='https://www.amazon.nl/After-Dark-Haruki-Murakami/dp/0307278735'
          target='_blank'
        >
          <button className='dark-mode-btn'>Buy from Amazon</button>
        </a>
      </section>
      <div className='dark-mode-bg'>
        <h1>BOOKS</h1>
      </div>
    </div>
  );
}

export default Index;
