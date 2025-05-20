const owner = "AsiaKabacinska";
const repositoryContainer = document.querySelector(".repositories--js");

fetch(`https://api.github.com/users/${owner}/repos`)
  .then((response) => response.json())
  .then((response) => {
    // Sortowanie od najnowszego do najstarszego według ostatniej aktualizacji
    response.sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at));
    for (let repos of response) {
      const { name, html_url } = repos;
      const element = `<li><a href="${html_url}">${name}</a></li>`;
      repositoryContainer.insertAdjacentHTML("beforeend", element);
    }
  })
  .catch((error) => {
    console.log("Error: ", error);
  });
