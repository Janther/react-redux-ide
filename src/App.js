import React from 'react';
import './App.css';
import Editor from './editor/Editor';

const App = ({ editors }) => (
  <div>
    {editors.map(function(editor, index) {
      return <Editor editorId={editor} key={editor} />
    })}
  </div>
)

export default App
