import React, { Component } from "react";
import logo from "./assets/images/interflora-logo.svg";
import "./index.css";

import MessageForm from './containers/MessageForm';
import Message from './components/Message';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [
        {
          text: "Dear John, the on of going safely but sounded switching prisoners. Question dressed most traveler from he the he project arranged where all just noting the which, destined she sinking events, multi great their met the her one. Listen.",
          category: "1"
        }
      ]
    }
  }

  addMessage = (newMessage) => {
    const newMessages = [...this.state.messages, newMessage];
    this.setState({ messages: newMessages });
  };

  removeMessage = index => {
    const newMessages = [...this.state.messages];
    newMessages.splice(index, 1);
    this.setState({ messages: newMessages });
  };

  render() {
    const { messages } = this.state;

    return (
      <div className="App container-fluid pl-0 pr-0">
        <header className="header">
          <div className="header-inner">
            <img src={logo}  alt="logo"/>
          </div>
        </header>

        <div className="message-container container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="section-headline">
                <h1>Skriv en kort hilsen</h1>
                <p>Her kan du skrive en kort hilsen og se dine hilsener</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-lg-6">
              <MessageForm addMessage={this.addMessage} />
            </div>
            <div className="col-md-12 col-lg-6">
              <div className="message-list">
                <h2 className="card-headline">Alle hilsener</h2>
                {messages.map((message, index) => (
                  <Message
                    key={index}
                    index={index}
                    message={message}
                    removeMessage={this.removeMessage}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <footer></footer>
      </div>
    );
  }
}

export default App;