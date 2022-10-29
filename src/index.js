const { registerBlockType } = wp.blocks;

registerBlockType("uzair/custom-cta", {
  // built-in attributes
  title: "Call To Action",
  description: "Block To Generate Custom CTA",
  icon: "format-image",
  category: "text",
  // custom attributes
  attributes: {},
  // custom functions

  // built-in functions
  edit() {
    return <div>no</div>;
  },
  save() {},
});
