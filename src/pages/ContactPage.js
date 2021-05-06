import React from "react";
import "../styles/ContactPage.css";
import { Prompt } from "react-router-dom";

class ContactPage extends React.Component {
  state = {
    value: "",
    isEmpty: false,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      value: "",
      isEmpty: false,
    });
  };
  handleTextArea = (e) => {
    this.setState({
      value: e.target.value,
    });
    if (this.state.value) {
      this.setState({
        isEmpty: true,
      });
    } else {
      this.setState({
        isEmpty: false,
      });
    }
  };
  render() {
    return (
      <div className="contact">
        <h3>Napisz do nas</h3>
        <form onSubmit={this.handleSubmit}>
          <textarea
            value={this.state.value}
            onChange={this.handleTextArea}
            placeholder="Wpisz wiadomość..."
          ></textarea>
          <button>Wyślij</button>
        </form>
        <Prompt
          when={this.state.isEmpty}
          message="Nie uzupełniłeś formularzu czy chcesz opuścić strone"
        />
      </div>
    );
  }
}

export default ContactPage;
