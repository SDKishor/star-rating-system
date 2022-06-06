import React, { useState } from "react";

export default function StarRating() {
  const StarIds = [1, 2, 3, 4, 5];
  const [hovered, setHovered] = useState(0);
  const [clicked, setClicked] = useState(0);

  const EMPTY_STAR =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Five-pointed_star.svg/1088px-Five-pointed_star.svg.png";
  const FULL_STAR =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Gold_Star.svg/1200px-Gold_Star.svg.png";

  const getImg = (id) => {
    return hovered >= id || clicked >= id ? FULL_STAR : EMPTY_STAR;
  };

  const myStyle = { display: "flex", justifyContent: "center", padding: 20 };

  return (
    <div style={myStyle}>
      {StarIds.map((id) => (
        <img
          key={id}
          onMouseEnter={() => {
            setHovered(id);
          }}
          onMouseLeave={() => {
            setHovered(0);
          }}
          onClick={() => setClicked(id)}
          width={100}
          height={100}
          src={getImg(id)}
          alt=""
        />
      ))}
    </div>
  );
}
