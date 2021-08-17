import './MarkdownEditor.css';

export const MarkdownEditor = () => {
  return (
    <section className="edit">
      <div className="section__header">
        <h2>Editor</h2>
      </div>
      <div className="section__body">
        <label htmlFor="editor">Enter your markdown below</label>
        <textarea id="editor" name="editor"></textarea>
      </div>
    </section>
  );
};
