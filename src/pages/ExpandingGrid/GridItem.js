import React, { useEffect, useRef, useState } from "react";

export default function GridItem({
  title,
  shortText,
  paragraph,
  elementIndex,
}) {
  const [itemIndex, setItemIndex] = useState(elementIndex - 1);
  const [gridItemsArray, setGridItemsArray] = useState([]);
  const [rowItemsArray, setRowItemsArray] = useState();

  const refGridItem = useRef(null);

  const columns = 3;
  const rows = 2;

  useEffect(() => {
    setGridItemsArray([...refGridItem.current.parentNode.children]);
  }, []);

  useEffect(() => {
    let indexesArray = [];

    for (let i = 0; i < gridItemsArray.length; i++) {
      indexesArray.push(i);
    }

    let middleIndex = Math.ceil(gridItemsArray.length / columns);

    const firstHalf = [...indexesArray].splice(0, middleIndex + 1);
    const secondHalf = [...indexesArray].splice(-middleIndex - 1);

    setRowItemsArray([firstHalf, secondHalf]);
  }, [gridItemsArray]);

  const gridGrow = () => {
    gridItemsArray.forEach((item, index) => {
      if (index === itemIndex) {
        item.style.width = "40vw";
      } else if (index === itemIndex + columns) {
        gridItemsArray[itemIndex + columns].style.width = "40vw";
      } else {
        item.style.width = "25vw";
      }
    });
    gridItemsArray.forEach((item, index) => {
      //   if (rowItemsArray[0].includes(index)) {
      //     rowItemsArray[0];
      //   }
    });
  };
  const gridShrink = () => {
    gridItemsArray.forEach((item) => {
      item.style.width = "30vw";
      item.style.height = "30vh";
    });
  };

  return (
    <article
      className='expandinggrid-grid-item'
      onMouseEnter={gridGrow}
      onMouseLeave={gridShrink}
      ref={refGridItem}
    >
      <div className='expandinggrid-container'>
        <div className='expandinggrid-title'>
          <h4>
            {title}
            <span> /{elementIndex}</span>
          </h4>
          <h5>Details</h5>
        </div>
        <div className='expandinggrid-img-container'>
          <div className='expandinggrid-img'>
            <img src='' alt='' />
          </div>
        </div>
      </div>
    </article>
  );
}
