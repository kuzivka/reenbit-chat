import { format } from "date-fns";
import AlexPhoto from "./images/alex.jpg";

let contacts = [
  {
    name: "Josephina",
    date: format(new Date(2022, 1, 24), "MMM dd, yyyy"),
    message: "Tratatatata",
    photo: {AlexPhoto},
  },
  {
    name: "Alex",
    date: format(new Date(2022, 2, 24), "MMM dd, yyyy"),
    message: "Tratatatata",
    photo: {AlexPhoto},
  },
  {
    name: "Los Lisovuy",
    date: format(new Date(2022, 3, 24), "MMM dd, yyyy"),
    message: "Tratatatata",
    photo: {AlexPhoto},
  },
];

export default contacts