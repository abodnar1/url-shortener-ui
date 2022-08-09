import React, { useState } from 'react';

const UrlForm = ({ addUrlToShorten }) => {
  const [title, setTitle] = useState("");
  const [urlToShorten, setUrlToShorten] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    const newUrl = {
      long_url: urlToShorten,
      title: title      
    };

    addUrlToShorten(newUrl);
    clearInputs();
  };

   const clearInputs = () => {
    setTitle("");
    setUrlToShorten("");
  };
  
  return (
    <form>
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

// class UrlForm extends Component {
//   constructor(props) {
//     super();
//     this.props = props;
//     this.state = {
//       title: '',
//       urlToShorten: ''
//     };
//   }

  // handleNameChange = e => {
  //   this.setState({ [e.target.name]: e.target.value });
  // }

  // handleSubmit = e => {
  //   e.preventDefault();
  //   this.clearInputs();
  // }

  // clearInputs = () => {
  //   this.setState({title: '', urlToShorten: ''});
  // }

  // render() {
  //   return (
  //     <form>
  //       <input
  //         type='text'
  //         placeholder='Title...'
  //         name='title'
  //         value={this.state.title}
  //         onChange={e => this.handleNameChange(e)}
  //       />

  //       <input
  //         type='text'
  //         placeholder='URL to Shorten...'
  //         name='title'
  //         value={this.state.title}
  //         onChange={e => this.handleNameChange(e)}
  //       />

  //       <button onClick={e => this.handleSubmit(e)}>
  //         Shorten Please!
  //       </button>
  //     </form>
  //   )
  // }
// }

export default UrlForm;
