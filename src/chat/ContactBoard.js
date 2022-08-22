import ChatCards from "../components/ChatCards";
import ContactListHeader from "../components/ContactListHeader";

export default function ContactBoard(props) {
  const { chatState, setSelectedContact, sortedContactList } = props;

  return (
    <div className="ContactBoard">
      <ContactListHeader />
      <ChatCards
        chatState={chatState}
        setSelectedContact={setSelectedContact}
        sortedContactList={sortedContactList}
      />
    </div>
  );
}
