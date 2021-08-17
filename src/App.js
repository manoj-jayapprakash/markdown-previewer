import './App.css';
import { MarkdownEditor } from './Markdown/MarkdownEditor';
import { MarkdownPreviewer } from './Markdown/MarkdownPreviewer';

function App() {
  return (
    <div className="app">
      <MarkdownEditor />
      <MarkdownPreviewer />
    </div>
  );
}

export default App;
