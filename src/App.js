import React from "react";
import "atom-css";
import Editor from "./editor/Editor";

const App = ({ editors }) =>
  editors.map((editor, index) => (
    <Editor editorId={editor.name} key={editor} />
  ));

export default App;
