function loadCSS(href, onload) {
  var link = document.createElement("link");
  link.type = "text/css";
  link.rel = "stylesheet";
  link.href = href;
  link.onload = onload;
  document.head.appendChild(link);
}

function loadScript(src, onload) {
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = src;
  script.onload = onload;
  document.head.appendChild(script);
}
if (!localStorage.getItem("hasVisited")) {
  localStorage.setItem("hasVisited", true);
  console.log(
    "%c[ %cStarLight%c ] %cFirst Site Visit",
    "font-weight: bold; color: white; font-size: 20px;",
    "font-weight: bold; color: black; font-size: 20px;",
    "font-weight: normal; font-size: 20px;",
    "font-weight: normal; font-size: 20px;"
  );
  localStorage.setItem("theme", "gray");
  localStorage.setItem("search-eng", "google");
}
loadCSS(
  "https://site-assets.fontawesome.com/releases/v6.5.2/css/all.css",
  function () {
    console.log(
      "%c[ %cStarlight%c ] %cIcons loaded",
      "font-weight: bold; color: white; font-size: 20px;",
      "font-weight: bold; color: black; font-size: 20px;",
      "font-weight: normal; font-size: 20px;",
      "font-weight: normal; font-size: 20px;"
    );
  }
);
loadScript("/./js/themes.js");
