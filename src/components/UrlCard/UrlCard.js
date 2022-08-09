import React from "react";
import "./UrlCard.css";

const UrlCard = ({ id, title, shortUrl, longUrl }) => {
  return (
    <div className="url-card">
      <h3>{title}</h3>
      <a href={shortUrl} target="blank">{shortUrl}</a>
      <p className="long-url">{longUrl}</p>
    </div>
  );
};

export default UrlCard;
