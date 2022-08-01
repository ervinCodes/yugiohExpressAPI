document.querySelector("button").addEventListener("click", apiRequest);

async function apiRequest() {
  const cardName = document.querySelector("input").value;
  try {
    const response = await fetch(
      `https://yugioh-express-api.herokuapp.com/api/${cardName}`
    );
    const data = await response.json();

    console.log(data);
    document.querySelector("h2").innerText = data.name;
    document.querySelector("h3").innerText = data.types;
    document.querySelector("h4").innerText = data.description;
  } catch (error) {
    console.log(error);
  }
}
