import React from "react";

const Message = ({ message, category, index, removeMessage }) => (
  <div className="message">
    <p>{message.category}</p>
    <p>{message.text}</p>
    <button className="btn-delete" onClick={() => removeMessage(index)}>
      <p>x</p>
    </button>
  </div>
);

export default Message;