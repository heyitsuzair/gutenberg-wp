const { registerBlockType } = wp.blocks;
const { RichText } = wp.blockEditor;

registerBlockType("uzair/custom-cta", {
  // built-in attributes
  title: "Call To Action",
  description: "Block To Generate Custom CTA",
  icon: "format-image",
  category: "text",
  // custom attributes
  attributes: {
    title: {
      type: "string",
      source: "html",
      selector: "h3",
    },
    body: {
      type: "string",
      source: "html",
      selector: "p",
    },
  },
  // custom functions

  // built-in functions
  edit: ({ attributes, setAttributes }) => {
    const { title, body } = attributes;
    const updateAuthor = (e) => {
      setAttributes({ author: e.target.value });
    };
    const onChangeTitle = (newTitle) => {
      setAttributes({ title: newTitle });
    };
    const onChangeBody = (newBody) => {
      setAttributes({ body: newBody });
    };

    return [
      <div class="cta-container">
        <RichText
          key="editable"
          tagName="h2"
          placeholder="Your CTA Title"
          value={title}
          onChange={onChangeTitle}
        />
        <RichText
          key="editable"
          tagName="p"
          placeholder="Your CTA Body"
          value={body}
          onChange={onChangeBody}
        />
      </div>,
    ];
  },
  save: ({ attributes }) => {
    const { title, body } = attributes;
    return (
      <div class="cta-container">
        <h2>{title}</h2>
        <RichText.Content tagName="p" value={body} />
      </div>
    );
  },
});
