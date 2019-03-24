import React, {Component} from 'react';  

class messageForm extends Component {
  
  state = { value: "" };

  updateValue = e => this.setState({ value: e.target.value });

  handleSubmit = e => {
    e.preventDefault();
    if (!this.state.value) return;
    this.props.addMessage(this.state.value);
    this.setState({ value: "" });
  };

  render() {
    const { value } = this.state;

    return (
      <div className="message-form">
        <h2 className="card-headline">Tilføj en hilsen</h2>
        <form onSubmit={this.handleSubmit}>
          <textarea
            type="text"
            className="input"
            value={value}
            onChange={this.updateValue}
            placeholder={"Skriv en hilsen..."}
          />
          <button className="btn-primary"
            onClick= {this.handleSubmit}>    
            Tilføj 
          </button>
        </form>
      </div>
    );
  }
}




export default messageForm;