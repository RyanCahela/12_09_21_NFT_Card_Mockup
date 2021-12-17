(function create_new_color_scheme() {
  const createNewSchemeForm = querySelector(".js-create-new-scheme-form");

  //Primary Color Input
  enableLivePreview({
    inputElement: querySelector(".js-primary-color-input"),
    previewElement: querySelector(".js-primary-color-preview"),
  });

  //Accent Color Input
  enableLivePreview({
    inputElement: querySelector(".js-accent-color-input"),
    previewElement: querySelector(".js-accent-color-preview"),
  });

  //Page Background Input
  enableLivePreview({
    inputElement: querySelector(".js-page-background-color-input"),
    previewElement: querySelector(".js-page-background-color-preview"),
  });

  //Card Background Input
  enableLivePreview({
    inputElement: querySelector(".js-card-background-color-input"),
    previewElement: querySelector(".js-card-background-color-preview"),
  });

  //Link Color Input
  enableLivePreview({
    inputElement: querySelector(".js-link-color-input"),
    previewElement: querySelector(".js-link-color-preview"),
  });

  createNewSchemeForm.addEventListener("submit", (e) => {
    e.preventDefault();
  });

  //helper function

  function querySelector(CssSelector) {
    return document.querySelector(CssSelector);
  }

  function appendWithHashtag(string = "f") {
    if (string[0] === "#") return string;
    return "#" + string;
  }

  function enableLivePreview({ inputElement, previewElement }) {
    inputElement.addEventListener("input", (e) => {
      const hexCode = appendWithHashtag(e.target.value);
      previewElement.style.backgroundColor = hexCode;
    });
  }
})();
