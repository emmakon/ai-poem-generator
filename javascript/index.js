function generatePoem(event) {
  event.preventDefault();

  let poem = `The poem will go here
          <br />
          The next line of the poem will go here`;

  new Typewriter("#poem", {
    strings: poem,
    autoStart: true,
    delay: 30,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-form");
poemFormElement.addEventListener("submit", generatePoem);
