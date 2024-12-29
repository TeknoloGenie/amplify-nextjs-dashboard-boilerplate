import { WysiwygEditor } from "nodegeeks-react-wysiwyg-editor";
import { useState } from "react";

const MyEditor = () => {
  const [content, setContent] = useState("<p>Hello World!</p>");

  return (
    <WysiwygEditor
      content={content}
      setContent={setContent}
    />
  );
};

export default MyEditor;