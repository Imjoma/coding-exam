import { useState } from "react";

const create = ({ handleSave }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <form>
      <label>Title</label>
      <input
        type="input"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label>Content</label>
      <input
        type="input"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button onClick={(e) => handleSave(e, title, content)}>post</button>
    </form>
  );
};

export default create;
