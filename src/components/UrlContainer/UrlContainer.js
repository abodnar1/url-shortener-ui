import React from 'react';
import './UrlContainer.css';
import UrlCard from "../UrlCard/UrlCard";

const UrlContainer = ({ urls }) => {
  const urlEls = urls.map(url => {
    return (
      <UrlCard 
        id={url.id}
        key={url.id}
        title={url.title}
        shortUrl={url.short_url}
        longUrl={url.long_url}
      />
    );
  });

  return (
    <section className="url-container">
      {urlEls}
    </section>
  );
};

export default UrlContainer;
