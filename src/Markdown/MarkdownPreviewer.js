import './MarkdownPreviewer.css';
import marked from 'marked';

export const MarkdownPreviewer = (props) => {
  const markdownConverter = (str) => {
    return { __html: marked(str) };
  };

  return (
    <section className="previewer">
      <div className="section__header">
        <h2>Previewer</h2>
      </div>
      <div className="section__body">
        <div
          id="preview"
          dangerouslySetInnerHTML={markdownConverter(props.markdownText)}
        />
      </div>
    </section>
  );
};
