import React from "react";

import GridItem from "./GridItem";
import "./style.scss";

export default function index() {
  return (
    <div className='grid-stretch-container'>
      <div className='grid-stretch-scroller'>
        <GridItem index={1} />
        <GridItem index={2} />
        <GridItem index={3} />
        <GridItem index={4} />
        <GridItem index={5} />
        <GridItem index={6} />
        <GridItem index={7} />
        <GridItem index={8} />
      </div>
    </div>
  );
}
