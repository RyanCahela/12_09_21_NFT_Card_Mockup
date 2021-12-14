(function create_new_color_scheme() {
  const createNewSchemeForm = document.querySelector(
    ".js-create-new-scheme-form"
  );

  const primaryColorInput = document.querySelector("#js-primary-color");
  const primaryColorPreview = document.querySelector(
    "#js-primary-color-preview"
  );

  primaryColorInput.addEventListener("input", (e) => {
    console.log("change", e.target.value);
    const hexCode = appendWithHashtag(e.target.value);
    primaryColorPreview.style.backgroundColor = hexCode;
  });

  createNewSchemeForm.addEventListener("submit", (e) => {
    e.preventDefault();
  });

  //helper function
  function appendWithHashtag(string = "") {
    if (string[0] === "#") return string;
    return "#" + string;
  }
})();
