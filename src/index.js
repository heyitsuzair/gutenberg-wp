const { registerBlockType } = wp.blocks;
const { RichText, InspectorControls, ColorPalette, MediaUpload } =
  wp.blockEditor;
const { PanelBody, Button, RangeControl } = wp.components;

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
    overlayColor: {
      type: "string",
      default: "black",
    },
    overlayOpacity: {
      type: "number",
      default: 0.3,
    },
  },
  // custom functions

  // built-in functions
  edit: ({ attributes, setAttributes }) => {
    const {
      title,
      body,
      titleColor,
      backgroundImage,
      bodyColor,
      overlayColor,
      overlayOpacity,
    } = attributes;

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
    const onOverlayColorChange = (newColor) => {
      setAttributes({ overlayColor: newColor });
    };
    const onOverlayOpacityChange = (newOpacity) => {
      setAttributes({ overlayOpacity: newOpacity });
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
            <div style={{ margin: "1rem 0" }}>
              <p>
                <strong>Overlay Color:</strong>
              </p>
              <ColorPalette
                value={overlayColor}
                onChange={onOverlayColorChange}
              />
            </div>
            <RangeControl
              label="Overlay Opacity"
              value={overlayOpacity}
              onChange={onOverlayOpacityChange}
              min={0}
              max={1}
              step={0.05}
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
          <div
            class="cta-overlay"
            style={{
              backgroundColor: overlayColor,
              opacity: overlayOpacity,
            }}
          ></div>
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
      </>,
    ];
  },
  save: ({ attributes }) => {
    const {
      title,
      body,
      titleColor,
      backgroundImage,
      bodyColor,
      overlayOpacity,
      overlayColor,
    } = attributes;

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
        <div
          class="cta-overlay"
          style={{
            backgroundColor: overlayColor,
            opacity: overlayOpacity,
          }}
        ></div>
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
