import './App.css';
import { MarkdownEditor } from './Markdown/MarkdownEditor';
import { MarkdownPreviewer } from './Markdown/MarkdownPreviewer';

import { useState } from 'react';

function App() {
  const [text, setText] = useState('');

  const getMarkdownText = (markdown) => setText(markdown);

  console.log(text);
  return (
    <div className="app">
      <MarkdownEditor onMarkdownEntered={getMarkdownText} />
      <MarkdownPreviewer markdownText={text} />
    </div>
  );
}

export default App;
