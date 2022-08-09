import React, { useState } from 'react';

const UrlForm = ({ addUrlToShorten, setError }) => {
  const [title, setTitle] = useState("");
  const [urlToShorten, setUrlToShorten] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    if (!title || !urlToShorten) {
      return setError("Please fill out all fields.")
    }

    const newUrl = {
      title: title,      
      long_url: urlToShorten
    };

    addUrlToShorten(newUrl);
    clearInputs();
  };

   const clearInputs = () => {
    setTitle("");
    setUrlToShorten("");
  };
  
  return (
    <form className="form-container">
      <input
        type='text'
        placeholder='Title...'
        name='title'
        value={title}
        onChange={e => setTitle(e.target.value)}
      />

      <input
        type='text'
        placeholder='URL to Shorten...'
        name='urlToShorten'
        value={urlToShorten}
        onChange={e => setUrlToShorten(e.target.value)}
      />

      <button onClick={e => handleSubmit(e)}>
        Shorten Please!
      </button>
    </form>
  );
};

export default UrlForm;
