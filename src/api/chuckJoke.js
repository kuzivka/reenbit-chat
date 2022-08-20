export default function joke() {
  fetch("https://api.chucknorris.io/jokes/random")
    .then((response) => response.json())
    .then((response) => console.log(response.value))
    .catch((err) => console.error(err));
}
