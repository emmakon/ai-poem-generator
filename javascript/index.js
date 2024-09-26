function generatePoem(response) {
  let poem = response.data.answer;

  new Typewriter("#poem", {
    strings: poem,
    autoStart: true,
    delay: 20,
    cursor: "",
  });
}

function callApi(event) {
  event.preventDefault();

  let searchForm = document.getElementById("user-input");
  let userInput = searchForm.value;

  console.log(userInput);

  let apiKey = "b532784o70betf374c9ae221b35afa9b";
  let prompt = `User instructions: Please create a poem that mimics the stylings of ${userInput}. This poem must be completely original and not plagiarize the original author. The poem should always be about dogs and no longer than 6 lines. Please sign the poem at the bottom: <strong>This poem was inspired by ${userInput}</strong>`;
  let context = `We are paying homage to our favourite poets. Your role is to create an entirely new and unique poem but mimic the stylings, tone, and voice of the provided author. If you don't know the author, please respond with "I do not know this author, please choose another". Please give the poem in simple HTML format but avoid adding html in text at the beginning of the answer. Please don't include a title but do include a <br /> between each line. Make sure to follow the user instructions`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.innerHTML = "We are crafting a poem just for you!";

  axios.get(apiUrl).then(generatePoem);
}

let poemFormElement = document.querySelector("#poem-form");
poemFormElement.addEventListener("submit", callApi);
