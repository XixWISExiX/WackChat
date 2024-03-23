// ChatBox.js
import React from "react";
import "./ChatBox.css"; // Import CSS file for styling

const ChatBox = () => {
  const submitMessage = () => {
    const messageBox = document.getElementById("messageBox");
    const message = messageBox.value.trim(); // Trim whitespace

    // Check if the message is not empty and does not exceed the character limit
    if (message && message.length <= 140) {
      // Submit the message (you can replace this with your submission logic)
      console.log("Message submitted:", message);
      // Clear the text box
      messageBox.value = "";
    }
  };

  const handleKeyDown = (event) => {
    // Check if the Enter key is pressed (keyCode 13)
    if (event.keyCode === 13) {
      // Prevent the default behavior (adding a new line)
      event.preventDefault();
      // Submit the message
      submitMessage();
    }
  };

  return (
    <div>
      <textarea
        id="messageBox"
        placeholder="Type your message..."
        maxLength="140"
        onKeyDown={handleKeyDown}
      ></textarea>
    </div>
  );
};

export default ChatBox;
