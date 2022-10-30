const { registerBlockType } = wp.blocks;
const { RichText, InspectorControls, ColorPalette, MediaUpload } =
  wp.blockEditor;
const { PanelBody, Button } = wp.components;

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
      selector: "h2",
    },
    titleColor: {
      type: "string",
      default: "black",
    },
    body: {
      type: "string",
      source: "html",
      selector: "p",
    },
    bodyColor: {
      type: "string",
      default: "black",
    },
    backgroundImage: {
      type: "string",
      default: null,
    },
  },
  // custom functions

  // built-in functions
  edit: ({ attributes, setAttributes }) => {
    const { title, body, titleColor, backgroundImage, bodyColor } = attributes;

    const onChangeTitle = (newTitle) => {
      setAttributes({ title: newTitle });
    };
    const onChangeBody = (newBody) => {
      setAttributes({ body: newBody });
    };

    const onTitleColorChange = (newColor) => {
      setAttributes({ titleColor: newColor });
    };

    const onSelectImage = (newImage) => {
      setAttributes({ backgroundImage: newImage.sizes.full.url });
    };
    const onBodyColor = (newColor) => {
      setAttributes({ bodyColor: newColor });
    };

    return [
      <>
        <InspectorControls style={{ marginBottom: "1rem" }}>
          <PanelBody title="Title Color Settings">
            <p>
              <strong>Select A Title Color:</strong>
            </p>
            <ColorPalette value={titleColor} onChange={onTitleColorChange} />
          </PanelBody>
          <PanelBody title="Body Color Settings">
            <p>
              <strong>Select A Body Color:</strong>
            </p>
            <ColorPalette value={bodyColor} onChange={onBodyColor} />
          </PanelBody>
          <PanelBody title="Background Image">
            <p>
              <strong>Select A Background Image:</strong>
            </p>
            <MediaUpload
              onSelect={onSelectImage}
              type="image"
              value={backgroundImage}
              render={({ open }) => {
                return (
                  <Button
                    onClick={open}
                    icon="upload"
                    className="editor-media-placeholder__button is-button is-default is-large"
                  >
                    Background Image
                  </Button>
                );
              }}
            />
          </PanelBody>
        </InspectorControls>
        <div
          class="cta-container"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            padding: "1rem",
            borderRadius: "5px",
          }}
        >
          <RichText
            key="editable"
            tagName="h2"
            placeholder="Your CTA Title"
            value={title}
            style={{ color: titleColor }}
            onChange={onChangeTitle}
          />
          <RichText
            key="editable"
            tagName="p"
            placeholder="Your CTA Body"
            value={body}
            onChange={onChangeBody}
            style={{ color: bodyColor }}
          />
        </div>
        ,
      </>,
    ];
  },
  save: ({ attributes }) => {
    const { title, body, titleColor, backgroundImage, bodyColor } = attributes;

    return (
      <div
        class="cta-container"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          padding: "1rem",
          borderRadius: "5px",
        }}
      >
        <h2 style={{ color: titleColor }}>{title}</h2>
        <RichText.Content
          tagName="p"
          value={body}
          style={{ color: bodyColor }}
        />
      </div>
    );
  },
});
