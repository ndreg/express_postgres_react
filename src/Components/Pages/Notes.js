import { useState, useEffect } from "react";

import Header from "../Organisms/Header";
import NoteContainer from "../Organisms/NoteContainer";

const URL = "http://localhost:3001/notes";

const Notes = () => {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    fetch(URL)
      .then((resp) => resp.json())
      .then((data) => setNotes(data));
  }, []);

  return (
    <>
      <Header />
      <NoteContainer notes={notes} setNotes={setNotes} />
    </>
  );
};

export default Notes;
