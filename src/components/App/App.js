import React, { useState } from "react";
import './App.css';
import { getUrls } from '../../apiCalls';
import UrlContainer from '../UrlContainer/UrlContainer';
import UrlForm from '../UrlForm/UrlForm';

const App = () => {
  const [urls, setUrls] = useState([
    {
      id: 1,
      long_url: "https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
      short_url: "http://localhost:3001/useshorturl/1",
      title: "Awesome photo"
    }
  ]);

  return (
    <main className="App">
      <header>
        <h1>URL Shortener</h1>
        <UrlForm />
      </header>

      <UrlContainer urls={urls} />
    </main>
  );
};

export default App;



// import React, { Component } from 'react';
// export class App extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       urls: []
  //     }
  //   }
  
  //   componentDidMount() {
  //   }

  // render() {