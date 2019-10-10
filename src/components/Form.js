import React from "react";

const Form = () => {
  const style = {
    background: "transparent",
    border: "1px solid #ccc"
  };

  return (
    // This iframe comes directly from the form embed section on airtable website
    <iframe
      title="Client Form"
      className="airtable-embed"
      src="https://airtable.com/embed/shrw0NedXV3j5VWqv?backgroundColor=blue"
      frameborder="0"
      onmousewheel=""
      width="100%"
      height="533"
      style={style}
    />
  );
};

export default Form;
