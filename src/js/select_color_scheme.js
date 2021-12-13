(function select_color_scheme() {
  //grab form elements
  const themeSelector = document.querySelector(".js-color-input-form");
  const body = document.body;

  //grab array of all theme class names
  const colorSelectOptionElements = themeSelector.querySelector(
    ".js-color-scheme-select"
  ).children;
  const themeClassNames = Array.from(colorSelectOptionElements).map(
    (element) => element.value
  );

  //listen for change
  themeSelector.addEventListener("change", (e) => {
    //on change remove all current theme classNames
    for (let className of body.classList.values()) {
      if (className === "body") {
        continue;
      }
      body.classList.remove(className);
    }

    //apply value from select box
    body.classList.add(e.target.value);
  });
})();
