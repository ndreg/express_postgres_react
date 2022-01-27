import NoteList from "../Molecules/NoteList";
import NoteForm from "../Molecules/NoteForm";

const NoteContainer = ({ notes }) => {
  return (
    <>
      <NoteForm />
      <NoteList notes={notes} />
    </>
  );
};

export default NoteContainer;
