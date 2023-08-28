import React, { Component } from 'react';
import './App.css';
import quotesData from './quotes.json'; 

class App extends Component {
  constructor(props) {
    super(props); 
    this.state={
      currentQuoteIndex:0,
    };
    this.getQuote=this.getQuote.bind(this)
  }


  componentDidMount() {
    // Code to execute when the component mounts
    this.getQuote();
  }

  getQuote(){
    const {currentQuoteIndex} =this.state;
    const totalQuotes =quotesData.length;
    const nextIndex = (currentQuoteIndex + 1) % totalQuotes;

    this.setState({
      currentQuoteIndex: nextIndex,
    })
  }



  render() {

    const {currentQuoteIndex}=this.state;
    const currentQuote = quotesData[currentQuoteIndex];
    return (
      <div>
        <div className="quote-box" id="quote-box">
          <div id="text" >{ currentQuote.text }</div>
          <div id="author">{currentQuote.author}</div>
          <button id="new-quote" onClick={this.getQuote}>New Quote</button>
          <a  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(currentQuote.text + " - " + currentQuote.author)}`}
          target="_blank"
          rel="noopener noreferrer"
         id="tweet-quote">tweet</a>
        </div>
      </div>
    );
  }
}

export default App;
