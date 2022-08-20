import ChatCards from "../components/ChatCards";
import ContactListHeader from "../components/ContactListHeader";

export default function ContactBoard(props) {
  const { chatState, setSelectedContact } = props;

  return (
    <div className="ContactBoard">
      <ContactListHeader />
      <ChatCards
        chatState={chatState}
        setSelectedContact={setSelectedContact}
      />
    </div>
  );
}
