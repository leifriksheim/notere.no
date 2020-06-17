export default {
  placeholder: {
    /* This example includes the default options for placeholder,
             if nothing is passed this is what it used */
    text: "Start å skrive",
    hideOnClick: false,
  },
  toolbar: {
    /* These are the default options for the toolbar,
             if nothing is passed this is what is used */
    allowMultiParagraphSelection: true,
    buttons: [
      "h1",
      "h2",
      "h3",
      "bold",
      "italic",
      "underline",
      "anchor",
      "quote",
      "unorderedlist",
      "orderedlist",
    ],
    diffLeft: 0,
    diffTop: -10,
    firstButtonClass: "medium-editor-button-first",
    lastButtonClass: "medium-editor-button-last",
    relativeContainer: null,
    standardizeSelectionStart: false,
    static: false,
    /* options which only apply when static is true */
    align: "center",
    sticky: false,
    updateOnEmptySelection: false,
  },
  paste: {
    /* This example includes the default options for paste,
             if nothing is passed this is what it used */
    forcePlainText: false,
    cleanPastedHTML: false,
    cleanReplacements: [],
    cleanAttrs: ["class", "style", "dir"],
    cleanTags: ["meta"],
    unwrapTags: [],
  },
};
