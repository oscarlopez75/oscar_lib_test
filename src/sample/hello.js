import React from "react";

export const Hello = props => {
  const { title, message } = props;

  return (
    <div>
      <h1>{title}</h1>
      <p>Message: {message}</p>
    </div>
  );
};

Hello.defaultProps = {
  title: "I am the fucking default title",
  message: "Default message"
};
