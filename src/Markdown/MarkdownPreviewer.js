import './MarkdownPreviewer.css';

export const MarkdownPreviewer = () => {
  return (
    <section className="previewer">
      <div className="section__header">
        <h2>Previewer</h2>
      </div>
      <div className="section__body">
        <div id="preview"></div>
      </div>
    </section>
  );
};
