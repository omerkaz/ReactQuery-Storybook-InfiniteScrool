import React from "react";
import "./ArtistCard.css";

function ArtistCard({ data }) {
  return (
    <div className="artistCardBody">
      <div>
        <img src={data.image[0]["#text"]} alt={data.name} />
      </div>
      <div>{data.name}</div>
      <div className="artistCardRightSection">
        <ul className="artistCardList">
          <li>Listeners: </li>
          <li>Playcount: </li>
        </ul>
        <ul className="artistCardList">
          <li>{data.listeners}</li>
          <li>{data.playcount}</li>
        </ul>
      </div>
    </div>
  );
}

export default ArtistCard;
