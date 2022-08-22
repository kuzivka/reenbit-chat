export async function chuckJoke() {
  try {
    const response = await fetch("https://api.chucknorris.io/jokes/random");
    const joke = await response.json();
    return {
      text: joke.value,
      date: Date.now(),
      type: "received",
    };
  } catch {
    return {
      text: "Sorry, I'm not availabel now",
      date: Date.now(),
      type: "received",
    };
  }
}
