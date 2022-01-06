(function initialize() {
  const red100 = "351.00,100.00%,96.08%";
  const red200 = "0.00,72.65%,77.06%";
  const red300 = "0.00,68.67%,67.45%";
  const red400 = "1.13,83.25%,62.55%";

  const storage = {
    redTheme: {
      "--primary-color": red100,
      "--primary-accent-color": red200,
      "--body-bg": red400,
      "--card-bg": red100,
      "--line-color": red100,
      "--avatar-border-color:": red100,
      "--link-font-color:": red400,
    },
  };

  localStorage.setItem("red", JSON.stringify(storage));

  const jsColorSchemeSelect = document.querySelector(".js-color-scheme-select");

  const themeNames = getAllLocalStorageThemeNames(localStorage);

  console.log("themeNames", themeNames);

  for (let i = 0; i < themeNames.length; i++) {
    const themeName = localStorage.getItem(themeNames[i]);
    const optionElement = createOptionElement({
      value: themeNames,
      textContent: themeNames[i],
    });
    jsColorSchemeSelect.appendChild(optionElement);
  }

  //helper functions
  function createOptionElement({ value, textContent }) {
    const optionElement = document.createElement("option");
    optionElement.value = value;
    optionElement.textContent = textContent;
    return optionElement;
  }

  function getAllLocalStorageThemeNames(storageObject) {
    const storageNames = [];
    for (let i = 0; i < storageObject.length; i++) {
      storageNames.push(storageObject.key(i));
    }
    return storageNames;
  }
})();
