import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// 1. UI Components: 
// ContactListItem
//    ContactIcon
//    MessagePreview
// ContactListHeader
// ListHeader
// SearchInput - controlled input
// ChatHeader
// 
// MineMessage
// ContactMessage
//    MessageText
//    MessageDate
// MessageInput (textarea)