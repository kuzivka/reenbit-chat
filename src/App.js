import React from "react";
import ChatCards from "./components/ChatCards.jsx";
import ChatHeader from "./components/ChatHeader.jsx";
import ContactListHeader from "./components/ContactListHeader.jsx";
import MessageString from "./components/Message.jsx";
import MessageInput from "./components/MessageInput.jsx";
import SearchInput from "./components/SearchInput.jsx";

function App() {
  return (
    <div className="App">
      <ContactListHeader />
      <ChatCards />
      <ChatHeader />
      <MessageInput />
      <SearchInput />
      <MessageString />
      <MessageString mine />
    </div>
  );
}

export default App;
