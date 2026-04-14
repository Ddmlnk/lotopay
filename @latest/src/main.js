async function loadSection(selector, path) {
  const response = await fetch(path);
  const html = await response.text();
  document.querySelector(selector).innerHTML = html;
}

async function init() {
  await loadSection("#header", "./src/sections/header.html");
  await loadSection("#hero", "./src/sections/hero.html");
  await loadSection("#info", "./src/sections/info.html");
  await loadSection("#history", "./src/sections/history.html");
  await loadSection("#contacts", "./src/sections/contacts.html");
  await loadSection("#footer", "./src/sections/footer.html");
}

init();
