import React, { Component } from "react";

class messageForm extends Component {
  state = { value: "", category: "", errors: false };

  updateValue = e => this.setState({ value: e.target.value, errors: false });

  handleSubmit = e => {
    e.preventDefault();
    if (!this.state.value || !this.state.category) {
      this.setState({ errors: true });
      return;
    };
    const newMessage = {text: this.state.value, category: this.state.category};
    this.props.addMessage(newMessage);
    this.setState({ value: "", category: "" });
  };

  handleChange = event => {
    this.setState({ category: event.target.value, errors: false });
  };

  render() {
    const { value, errors } = this.state;

    return (
      <div className="message-form">
        <h2 className="card-headline">Tilføj en hilsen</h2>
        {errors ? <small>Formularen er ugyldig</small> : null}
        <form onSubmit={this.handleSubmit}>
          <textarea
            required
            type="text"
            className="input"
            value={value}
            onChange={this.updateValue}
            placeholder={"Skriv en hilsen..."}
          />
          <select value={this.state.category} onChange={this.handleChange}>
            <option value="">Vælg en kategori</option>
            <option value="Kategori 1">Kategori 1</option>
            <option value="Kategori 2">Kategori 2</option>
          </select>
          <button className="btn-primary" onClick={this.handleSubmit}>
            Tilføj
          </button>
        </form>
      </div>
    );
  }
}

export default messageForm;

