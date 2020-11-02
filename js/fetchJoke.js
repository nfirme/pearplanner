function fetchJoke() {
  fetch('https://official-joke-api.appspot.com/random_joke')
      .then(response => response.json())
      .then(data => {
        document.getElementById("joke-setup").innerHTML = data.setup;
        document.getElementById("joke-punchline").innerHTML = data.punchline
      });
}

function init() {
  var btn = document.getElementById("jokeButton");
  btn.addEventListener("click", fetchJoke);
}

init();
