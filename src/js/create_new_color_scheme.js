(function create_new_color_scheme() {
  const createNewSchemeForm = document.querySelector(
    ".js-create-new-scheme-form"
  );

  //Primary Color Input
  enableLivePreview({
    inputElementId: "js-primary-color-input",
    previewElementId: "js-primary-color-preview",
  });

  //Accent Color Input
  enableLivePreview({
    inputElementId: "js-accent-color-input",
    previewElementId: "js-accent-color-preview",
  });

  //Page Background Input
  enableLivePreview({
    inputElementId: "js-page-background-color-input",
    previewElementId: "js-page-background-color-preview",
  });

  //Card Background Input
  enableLivePreview({
    inputElementId: "js-card-background-color-input",
    previewElementId: "js-card-background-color-preview",
  });

  //Link Color Input
  enableLivePreview({
    inputElementId: "js-link-color-input",
    previewElementId: "js-link-color-preview",
  });

  createNewSchemeForm.addEventListener("submit", (e) => {
    e.preventDefault();
  });

  //helper function
  function appendWithHashtag(string = "f") {
    if (string[0] === "#") return string;
    return "#" + string;
  }

  function enableLivePreview({ inputElementId, previewElementId }) {
    const colorInput = document.querySelector(
      appendWithHashtag(inputElementId)
    );
    const colorPreview = document.querySelector(
      appendWithHashtag(previewElementId)
    );

    colorInput.addEventListener("input", (e) => {
      const hexCode = appendWithHashtag(e.target.value);
      colorPreview.style.backgroundColor = hexCode;
    });
  }
})();
