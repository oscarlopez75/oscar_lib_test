import React from "react";
import { storiesOf } from "@storybook/react";
import { Button } from "@storybook/react/demo";
import { Hello } from "./hello";

storiesOf("Button", module)
  .add("with text", () => <Button>Hello Button</Button>)
  .add("with some emoji", () => (
    <Button>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

storiesOf("Sample", module)
  .add("default", () => <Hello />)
  .add("with some props", () => (
    <Hello title="Title from story book" message="Eres mu gilipollas" />
  ));
