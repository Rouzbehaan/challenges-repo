import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>click me! </Button>
      <Button> Here click Yo!</Button>
      <Button>Best button click eva!</Button>

      <Button>Most clickable button of times!</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
