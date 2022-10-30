const { registerBlockType } = wp.blocks;

registerBlockType("uzair/custom-cta", {
  // built-in attributes
  title: "Call To Action",
  description: "Block To Generate Custom CTA",
  icon: "format-image",
  category: "text",
  // custom attributes
  attributes: {
    author: {
      type: "string",
    },
  },
  // custom functions

  // built-in functions
  edit: ({ attributes, setAttributes }) => {
    const updateAuthor = (e) => {
      setAttributes({ author: e.target.value });
    };

    return (
      <input type="text" value={attributes.author} onChange={updateAuthor} />
    );
  },
  save: ({ attributes }) => {
    return (
      <p>
        Author Name: <i>{attributes.author}</i>
      </p>
    );
  },
});
