import React, { useState } from "react";
import './App.css';
import { getUrls } from '../../apiCalls';
import UrlContainer from '../UrlContainer/UrlContainer';
import UrlForm from '../UrlForm/UrlForm';

const App = () => {
  const [urls, setUrls] = useState([]);

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