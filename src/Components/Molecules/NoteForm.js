import { useState } from "react";

const URL = "http://localhost:3001/notes";

const NoteForm = () => {
  const [inputValue, setInputValue] = useState({
    username: "",
    note: "",
  });

  const handleInput = ({ target }) => {
    setInputValue({
      ...inputValue,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      inputValue.username.length > 2 &&
      inputValue.note.length > 0 &&
      inputValue.note.length < 140
    ) {
      sendNote();
    }
  };

  const sendNote = () => {
    fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: inputValue.username,
        note: inputValue.note,
      }),
    });
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        placeholder="Username"
        value={inputValue.username}
        name="username"
        onChange={(e) => handleInput(e)}
      />
      <textarea
        value={inputValue.note}
        placeholder="Write a note, max 140 char."
        name="note"
        onChange={(e) => handleInput(e)}
      />
      <input type="submit" value="ENVIAR" />
    </form>
  );
};

export default NoteForm;
