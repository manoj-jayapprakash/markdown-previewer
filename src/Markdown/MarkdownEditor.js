import './MarkdownEditor.css';
import { useState } from 'react';

export const MarkdownEditor = (props) => {
  const [input, setInput] = useState(props.initialValue);

  const inputHandler = (e) => {
    setInput(e.target.value);
    props.onMarkdownEntered(e.target.value);
  };

  return (
    <section className="edit">
      <div className="section__header">
        <h2>Editor</h2>
      </div>
      <div className="section__body">
        <label htmlFor="editor">Enter your markdown below</label>
        <textarea
          id="editor"
          name="editor"
          onChange={inputHandler}
          value={input}
        />
      </div>
    </section>
  );
};
