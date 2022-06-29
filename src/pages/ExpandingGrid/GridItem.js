import React, { useEffect, useRef, useState } from "react";

export default function GridItem({
  title,
  shortText,
  paragraph,
  elementIndex,
}) {
  const [itemIndex] = useState(elementIndex - 1);
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

    let middleIndex = Math.ceil(gridItemsArray.length / rows);

    const firstHalf = [...indexesArray].splice(0, middleIndex);
    const secondHalf = [...indexesArray].splice(-middleIndex);

    setRowItemsArray([firstHalf, secondHalf]);
  }, [gridItemsArray]);

  const gridGrow = () => {
    // Horizontal
    gridItemsArray.forEach((item, index) => {
      if (index === itemIndex) {
        item.style.width = "40vw";
      } else if (index === itemIndex + columns) {
        gridItemsArray[itemIndex + columns].style.width = "40vw";
      } else if (index === itemIndex - columns) {
        gridItemsArray[itemIndex - columns].style.width = "40vw";
      } else {
        item.style.width = "25vw";
      }
    });

    // Vertical
    if (rowItemsArray[0].includes(itemIndex)) {
      for (let i = 0; i < columns; i++) {
        gridItemsArray[rowItemsArray[0][i]].style.height = "40vh";
        gridItemsArray[rowItemsArray[1][i]].style.height = "20vh";
      }
    } else {
      for (let i = 0; i < columns; i++) {
        gridItemsArray[rowItemsArray[1][i]].style.height = "40vh";
        gridItemsArray[rowItemsArray[0][i]].style.height = "20vh";
      }
    }
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
          {/* <h5>Details</h5> */}
        </div>
        {/* <div className='expandinggrid-img-container'>
          <div className='expandinggrid-img'>
            <img src='' alt='' />
          </div>
        </div> */}
      </div>
    </article>
  );
}
