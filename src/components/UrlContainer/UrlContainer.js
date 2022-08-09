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
    <section>
      { urlEls.length ? urlEls : <p>No urls yet! Find some to shorten!</p> }
    </section>
  )
}

export default UrlContainer;

    // return (
    //   <div className="url">
    //     <h3>{url.title}</h3>
    //     <a href={url.short_url} target="blank">{url.short_url}</a>
    //     <p>{url.long_url}</p>
    //   </div>
    // )