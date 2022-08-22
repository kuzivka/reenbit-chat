import taylor from "../images/alex.jpg";
import mathilda from "../images/josephina.jpg";
import anhelina from "../images/anhelina.jpg"

const contacts = [
  {
    contactId: "a316e691-6904-4cc6-a738-3a6e2e8b1de7",
    firstName: "Taylor",
    lastName: "Hoover",
    avatarUrl: { taylor },
    chat: [
      {
        text: "taylor",
        date: 1660998352907,
        type: "sent",
      },
      {
        text: "Happy New Year",
        date: 1640988900000,
        type: "received",
      },
    ],
  },
  {
    contactId: "3b30c9d1-3272-46b5-b628-3c4d0baa8e77",
    firstName: "Mathilda",
    lastName: "Turner",
    avatarUrl: { mathilda },
    chat: [
      {
        text: "Скільки себе пам'ятаю",
        date: 1660998352907,
        type: "sent",
      },
      {
        text: "Завше світили мені",
        date: 1660998622461,
        type: "received",
      },
    ],
  },
  { contactId: "3b30c9d1-3272-628-3c4d0baa8e77",
  firstName: "Anhelina",
  lastName: "Kuziv",
  avatarUrl: { anhelina },
  chat: []
},
];
export default contacts