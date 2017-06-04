import React from "react";
import "atom-css";
import Editor from "./editor/Editor";

const App = ({ editors }) =>
  <div>
    {editors.map((editor, index) => <Editor editorId={editor} key={editor} />)}
  </div>;

export default App;
